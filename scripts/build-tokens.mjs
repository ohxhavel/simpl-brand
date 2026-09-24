#!/usr/bin/env node
// Generates app/tokens.css and lib/brand.ts from brand/tokens.json.
// `--check` exits non-zero if the generated files are out of date.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(root, "brand/tokens.json"), "utf8"));
const HEADER = "GENERATED from brand/tokens.json by scripts/build-tokens.mjs — do not edit. Run `pnpm tokens`.";

const isToken = (node) => node && typeof node === "object" && "$value" in node;
const children = (group) => Object.entries(group).filter(([k]) => !k.startsWith("$"));

function resolve(value) {
  if (typeof value !== "string") return value;
  const m = /^\{(.+)\}$/.exec(value);
  if (!m) return value;
  const target = m[1].split(".").reduce((node, key) => node?.[key], tokens);
  if (!isToken(target)) throw new Error(`Unresolved alias ${value}`);
  return resolve(target.$value);
}

// colour.surface.default -> surface, colour.status.healthy -> healthy
function colourName(path) {
  return path.filter((p) => p !== "default" && p !== "status").join("-");
}

const colours = [];
(function walk(group, path) {
  for (const [key, node] of children(group)) {
    if (isToken(node)) {
      colours.push({
        name: colourName([...path, key]),
        light: resolve(node.$value),
        dark: resolve(node.$extensions?.dark ?? node.$value),
      });
    } else walk(node, [...path, key]);
  }
})(tokens.colour, []);

const shadow = (v) => (typeof v === "string" ? v : `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`);
const px = (v) => Number.parseFloat(v);
const radius = Object.fromEntries(children(tokens.radius).map(([k, t]) => [k, t.$value]));
const duration = Object.fromEntries(children(tokens.motion.duration).map(([k, t]) => [k, t.$value]));
const ease = `cubic-bezier(${tokens.motion.ease.$value.join(",")})`;
const font = Object.fromEntries(children(tokens.font).map(([k, t]) => [k, t.$value]));
const quoteFont = (list) => list.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ");

const css = `/* ${HEADER} */

:root,
[data-theme="light"] {
${colours.map((c) => `  --sg-${c.name}: ${c.light};`).join("\n")}
${Object.entries(radius).map(([k, v]) => `  --sg-radius-${k}: ${v};`).join("\n")}
${Object.entries(duration).map(([k, v]) => `  --sg-duration-${k}: ${v};`).join("\n")}
  --sg-ease: ${ease};
  --sg-shadow-menu: ${shadow(tokens.shadow.menu.$value)};
}

.dark,
[data-theme="dark"] {
${colours.map((c) => `  --sg-${c.name}: ${c.dark};`).join("\n")}
  --sg-shadow-menu: ${shadow(tokens.shadow.menu.$extensions.dark)};
}
`;

const palette = children(tokens.palette).map(([key, t]) => ({ key, hex: t.$value, name: t.$description.split(" — ")[0] }));
const statusKeys = children(tokens.colour.status).map(([k]) => k);

const ts = `// ${HEADER}

export const SPACE = [${children(tokens.space).map(([, t]) => px(t.$value)).join(", ")}] as const;
export const RADIUS = { ${Object.entries(radius).map(([k, v]) => `${k}: ${px(v)}`).join(", ")} } as const;
export const MOTION = { ${Object.entries(duration).map(([k, v]) => `${k}: ${px(v)}`).join(", ")}, ease: "${ease}" } as const;
export const STATUS = [${statusKeys.map((k) => `"${k}"`).join(", ")}] as const;
export type Status = (typeof STATUS)[number];

export const FONT = {
${Object.entries(font).map(([k, v]) => `  ${k}: ${JSON.stringify(quoteFont(v))},`).join("\n")}
} as const;

export const PALETTE = {
${palette.map((p) => `  ${JSON.stringify(p.key)}: { hex: "${p.hex}", name: ${JSON.stringify(p.name)} },`).join("\n")}
} as const;
export type PaletteKey = keyof typeof PALETTE;

export const COLOUR = {
${colours.map((c) => `  ${JSON.stringify(c.name)}: { light: "${c.light}", dark: "${c.dark}" },`).join("\n")}
} as const;
export type ColourToken = keyof typeof COLOUR;
`;

const outputs = [
  [join(root, "app/tokens.css"), css],
  [join(root, "lib/brand.ts"), ts],
];

if (process.argv.includes("--check")) {
  const stale = outputs.filter(([file, body]) => {
    try {
      return readFileSync(file, "utf8") !== body;
    } catch {
      return true;
    }
  });
  if (stale.length) {
    console.error(`Out of date: ${stale.map(([f]) => f.replace(root + "/", "")).join(", ")}. Run \`pnpm tokens\`.`);
    process.exit(1);
  }
  console.log("Brand tokens are up to date.");
} else {
  for (const [file, body] of outputs) writeFileSync(file, body);
  console.log(`Wrote ${outputs.map(([f]) => f.replace(root + "/", "")).join(", ")}`);
}

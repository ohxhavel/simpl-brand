// GENERATED from brand/tokens.json by scripts/build-tokens.mjs — do not edit. Run `pnpm tokens`.

export const SPACE = [4, 8, 12, 18, 26, 34, 44, 56, 76] as const;
export const RADIUS = { ctl: 8, card: 12, panel: 14, page: 20 } as const;
export const MOTION = { fast: 120, enter: 180, panel: 240, ease: "cubic-bezier(0.2,0,0,1)" } as const;
export const STATUS = ["healthy", "degraded", "failed", "unbuilt"] as const;
export type Status = (typeof STATUS)[number];

export const FONT = {
  display: "Newsreader, Georgia, serif",
  sans: "Geist, system-ui, sans-serif",
  mono: "\"Geist Mono\", ui-monospace, monospace",
} as const;

export const PALETTE = {
  "green": { hex: "#1D3A34", name: "Deep green" },
  "terracotta": { hex: "#C96F4A", name: "Terracotta" },
  "bone": { hex: "#F6F3EE", name: "Bone" },
  "sage": { hex: "#8D9B96", name: "Sage" },
  "ink": { hex: "#12241F", name: "Ink" },
  "body": { hex: "#2C322F", name: "Body text" },
  "slate": { hex: "#5A6560", name: "Secondary" },
  "stone": { hex: "#EEEBE3", name: "Surface" },
  "canvas": { hex: "#DCD7CE", name: "Canvas" },
  "terracotta-deep": { hex: "#A8532F", name: "Terracotta deep" },
  "rule": { hex: "#DFDAD0", name: "Rule" },
  "rule-strong": { hex: "#C9C3B8", name: "Rule strong" },
  "healthy": { hex: "#3F6F5C", name: "Healthy" },
  "degraded": { hex: "#B0863A", name: "Degraded" },
  "failed": { hex: "#9E3B30", name: "Failed" },
  "unbuilt": { hex: "#7C8B95", name: "Not built" },
  "ink-deep": { hex: "#0B1512", name: "Ink deep" },
  "ink-page": { hex: "#17302A", name: "Dark page" },
  "ink-rule": { hex: "#2A473F", name: "Dark border" },
  "mist": { hex: "#DFE5E1", name: "Dark text" },
  "mist-muted": { hex: "#A9B6B1", name: "Dark secondary text" },
  "terracotta-light": { hex: "#E08A62", name: "Dark accent" },
  "terracotta-lighter": { hex: "#E8A183", name: "Dark accent text" },
  "healthy-light": { hex: "#6FA98F", name: "Healthy, dark mode text" },
  "degraded-light": { hex: "#D4A857", name: "Degraded, dark mode text" },
  "failed-light": { hex: "#D97A6C", name: "Failed, dark mode text" },
  "unbuilt-light": { hex: "#9AA9B2", name: "Not built, dark mode text" },
  "comment": { hex: "#5F7A72", name: "Code comments and running heads on ink" },
} as const;
export type PaletteKey = keyof typeof PALETTE;

export const COLOUR = {
  "canvas": { light: "#DCD7CE", dark: "#12241F" },
  "surface": { light: "#F6F3EE", dark: "#17302A" },
  "surface-raised": { light: "#EEEBE3", dark: "#1D3A34" },
  "surface-inverted": { light: "#12241F", dark: "#0B1512" },
  "border": { light: "#DFDAD0", dark: "#2A473F" },
  "border-strong": { light: "#C9C3B8", dark: "#2A473F" },
  "text": { light: "#2C322F", dark: "#DFE5E1" },
  "text-strong": { light: "#1D3A34", dark: "#F6F3EE" },
  "text-muted": { light: "#5A6560", dark: "#A9B6B1" },
  "text-label": { light: "#8D9B96", dark: "#8D9B96" },
  "accent": { light: "#C96F4A", dark: "#E08A62" },
  "accent-text": { light: "#A8532F", dark: "#E8A183" },
  "healthy": { light: "#3F6F5C", dark: "#6FA98F" },
  "degraded": { light: "#B0863A", dark: "#D4A857" },
  "failed": { light: "#9E3B30", dark: "#D97A6C" },
  "unbuilt": { light: "#7C8B95", dark: "#9AA9B2" },
  "code-comment": { light: "#5F7A72", dark: "#5F7A72" },
  "inverted-text": { light: "#DFE5E1", dark: "#DFE5E1" },
  "inverted-strong": { light: "#F6F3EE", dark: "#F6F3EE" },
  "inverted-muted": { light: "#A9B6B1", dark: "#A9B6B1" },
  "inverted-accent": { light: "#E08A62", dark: "#E08A62" },
} as const;
export type ColourToken = keyof typeof COLOUR;

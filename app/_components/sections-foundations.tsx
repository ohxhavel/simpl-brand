import tokens from "@/brand/tokens.json";
import Link from "next/link";
import { BrandMark, Lockup, ParentMark, Wordmark } from "@/components/brand";
import { COLOUR, MOTION, PALETTE, RADIUS, SPACE, STATUS } from "@/lib/brand";
import { cn } from "@/lib/utils";
import {
  Body,
  Caption,
  Cm,
  CodeBlock,
  Eyebrow,
  InfoCard,
  Lead,
  Lit,
  Mono,
  Note,
  Panel,
  Row,
  Rule,
  Specimen,
  Swatch,
  hex,
  ratio,
} from "./ui";
import { n } from "./sections";

export function BrandIdea() {
  return (
    <Panel id="brand-idea">
      <Row label={`${n("brand-idea")} — Brand idea`}>
        <h2 className="mb-4 max-w-[20em] font-display text-[28px] leading-[1.15] font-normal tracking-[-0.015em] text-strong md:text-[34px]">
          Infrastructure that survives a security review.
        </h2>
        <Lead className="mb-[26px]">
          Simpl Gateway sells to teams whose customers audit them. Every brand decision follows from that: the design
          is quiet because the buyer is sceptical, the claims are specific because the buyer verifies, and the gaps
          are published because the buyer will find them anyway.
        </Lead>
        <div className="grid gap-[18px] md:grid-cols-3">
          <InfoCard eyebrow="Audience">
            <p className="text-[13px] text-foreground">
              The engineer who integrates it, and the CISO or hospital CIO who has to approve it. Both read the same
              page; neither is flattered.
            </p>
          </InfoCard>
          <InfoCard eyebrow="Position">
            <p className="text-[13px] text-foreground">
              One key, every model — with the isolation and audit trail a regulated buyer will actually sign off on.
            </p>
          </InfoCard>
          <InfoCard eyebrow="Feeling">
            <p className="text-[13px] text-foreground">
              Considered, unhurried, documented. Closer to a standards body than a startup launch.
            </p>
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

export function Architecture() {
  return (
    <Panel id="architecture">
      <Row label={`${n("architecture")} — Architecture`}>
        <Lead>
          Simpl Solutions is the parent and owns the house system on this site — palette, type, tokens, voice and the
          rules every product shares. Each product keeps its own mark and positioning on its own page. The parent
          carries the contract, the entity and the trust; the product carries the argument and the interface.
        </Lead>
        <Note className="mb-6">
          <strong className="font-medium">Placeholder.</strong> The Simpl Solutions mark shown here — a deep-green
          rounded square — is a working placeholder with no source files, like the Gateway mark. Do not put it on
          anything printed or filed.
        </Note>
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-card bg-raised px-5 py-4">
            <div className="flex items-center gap-[11px]">
              <ParentMark size={24} />
              <span className="font-display text-[20px] text-strong">Simpl Solutions</span>
            </div>
            <Mono className="text-[10.5px] text-label">Parent · entity · contracts · BAAs</Mono>
          </div>
          <div className="ml-[34px] h-5 w-px bg-line-strong" />
          <div className="grid gap-3.5 md:grid-cols-2">
            <div className="rounded-card bg-raised px-5 py-4">
              <div className="mb-[7px] flex items-center gap-2.5">
                <BrandMark size={20} />
                <Wordmark className="text-[18px]" />
              </div>
              <Body>
                Product. Its own mark, positioning and assets —{" "}
                <Link href="/gateway" className="text-strong underline underline-offset-[3px] hover:text-accent-text">
                  see the Simpl Gateway page
                </Link>
                .
              </Body>
            </div>
            <div className="rounded-card bg-raised px-5 py-4">
              <div className="mb-[7px] flex items-center gap-2.5">
                <BrandMark size={20} tone="muted" />
                <span className="font-display text-[18px] text-muted-foreground">
                  Simpl <span className="text-label">Console</span>
                </span>
              </div>
              <Body>Product. Uses the house palette and type; keeps its own mark. Not yet specified here.</Body>
            </div>
          </div>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          <InfoCard eyebrow="Endorsement">
            <p className="text-[12.5px] text-foreground">
              Product-led everywhere the reader is technical. &ldquo;Simpl Gateway, from Simpl Solutions&rdquo;
              appears once — in the footer, the contract, the BAA and the deck&rsquo;s closing slide. Never in a nav
              or a headline.
            </p>
          </InfoCard>
          <InfoCard eyebrow="Features, not brands">
            <p className="text-[12.5px] text-foreground">
              Parts of the gateway take lowercase descriptive names: the console, the audit log, the redactor. No
              feature gets a mark, a wordmark or a colour of its own.
            </p>
          </InfoCard>
          <InfoCard eyebrow="One level deep">
            <p className="text-[12.5px] text-foreground">
              Parent → product. There is no third tier. If something needs a name below the product, it is a feature
              and takes a common noun.
            </p>
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

function LockupTile({
  caption,
  ground = "stone",
  className,
  children,
}: {
  caption: string;
  ground?: "stone" | "green";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Specimen
        className={cn(
          "flex h-24 items-center gap-2.5 rounded-card p-[22px]",
          ground === "green" ? "bg-strong" : "bg-raised",
          className
        )}
      >
        {children}
      </Specimen>
      <Caption>{caption}</Caption>
    </div>
  );
}

export function Logo() {
  return (
    <Panel id="logo" pageBreak className="flex flex-col gap-[38px]">
      <Row label={`${n("logo")} — Logo`}>
        <div className="mb-5 flex items-center gap-[13px]">
          <BrandMark size={34} />
          <Wordmark className="text-[32px]" />
        </div>
        <Note className="mb-[18px] max-w-[38em]">
          <strong className="font-medium">Placeholder.</strong> The ring-and-dot mark is not signed off and no source
          files exist — every instance in this guide is drawn in code. Use it as the working mark, do not put it on
          anything printed or filed, and expect it to change. The Gateway asset kit lists the files owed.
        </Note>
        <p className="m-0 max-w-[34em] text-[13.5px] leading-[1.62] text-muted-foreground">
          The mark is a boundary with something held safely inside it — the isolation argument reduced to one shape.
          It works at favicon size, survives one colour, and does not attempt to illustrate healthcare, which is where
          most infrastructure brands in this space go wrong.
        </p>
      </Row>

      <Rule />

      <Row label="Lockups">
        <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-3">
          <LockupTile caption="Primary · on deep green" ground="green">
            <Lockup tone="reversed" />
          </LockupTile>
          <LockupTile caption="Primary · on bone">
            <Lockup />
          </LockupTile>
          <LockupTile caption="Stacked · centred contexts only" className="flex-col justify-center gap-2 px-[22px] py-[18px]">
            <BrandMark size={22} />
            <Wordmark className="text-[17px]" />
          </LockupTile>
          <LockupTile caption="Mark alone · app icon, avatar" className="justify-center">
            <BrandMark size={36} />
          </LockupTile>
          <LockupTile caption="One colour · print, fax, embroidery" ground="green">
            <Lockup tone="reversed" oneColour />
          </LockupTile>
          <LockupTile caption="Product context · rule at 1px, never a second logo" className="gap-[9px]">
            <BrandMark size={20} />
            <Wordmark className="text-[17px]" />
            <span className="h-[17px] w-px bg-line-strong" />
            <Mono className="text-[10.5px] tracking-[0.06em] text-muted-foreground uppercase">Console</Mono>
          </LockupTile>
        </div>
      </Row>

      <Rule />

      <Row label="Construction">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Specimen className="flex items-center justify-center rounded-card bg-raised p-[26px]">
              <div className="flex items-center gap-3 border border-dashed border-line-strong p-6">
                <BrandMark size={32} />
                <Wordmark className="text-[26px]" />
              </div>
            </Specimen>
            <Body className="mt-2.5">
              Clear space equals the diameter of the inner dot on every side. Nothing crosses it — not a nav item,
              not a page edge.
            </Body>
          </div>
          <div>
            <Specimen className="flex items-center justify-center gap-[26px] rounded-card bg-raised p-[26px]">
              {[34, 24, 16].map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <BrandMark size={s} />
                  <Mono className="text-[10px] text-label">{s === 16 ? "16px min" : `${s}px`}</Mono>
                </div>
              ))}
            </Specimen>
            <Body className="mt-2.5">
              Ring weight scales with the mark: 2.5px at 34, 2px at 24, 1.5px at 16. Below 16px use a filled
              terracotta dot with no ring.
            </Body>
          </div>
          <div>
            <Specimen className="flex items-center justify-center gap-3.5 rounded-card bg-raised p-[26px]">
              <div className="flex size-16 items-center justify-center rounded-panel bg-strong">
                <BrandMark size={30} tone="reversed" />
              </div>
              <div className="flex size-8 items-center justify-center rounded-[7px] bg-strong">
                <BrandMark size={16} tone="reversed" />
              </div>
            </Specimen>
            <Body className="mt-2.5">
              App icon and favicon: mark reversed on deep green, optically centred, 46% of the tile width.
            </Body>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

// Deliberately off-palette colours used only to illustrate misuse.
const MISUSE = { blue: "#3B5BDB", yellow: "#F2C94C", shadow: "0 6px 12px rgba(0,0,0,0.35)" };

function MisuseTile({
  title,
  body,
  ground = "stone",
  children,
}: {
  title: string;
  body: string;
  ground?: "stone" | "sage";
  children: React.ReactNode;
}) {
  return (
    <div>
      <Specimen
        className={cn(
          "flex h-[84px] items-center justify-center gap-[9px] rounded-card",
          ground === "sage" ? "bg-label" : "border bg-raised"
        )}
      >
        {children}
      </Specimen>
      <div className="mt-[9px] text-[12.5px] font-medium text-accent-text">{title}</div>
      <div className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">{body}</div>
    </div>
  );
}

export function Misuse() {
  const ring = "flex items-center justify-center rounded-full border-strong";
  return (
    <Panel id="misuse">
      <Row label={`${n("misuse")} — Misuse`}>
        <Lead className="mb-[22px]">Five failures worth naming. Each one has already happened to a logo of this shape.</Lead>
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-5">
          <MisuseTile title="Never stretch" body="Scale proportionally, always.">
            <div className={cn(ring, "h-7 w-[52px] border-[2.5px]")}>
              <div className="h-[9px] w-4 rounded-full bg-accent" />
            </div>
          </MisuseTile>
          <MisuseTile title="Never recolour" body="Two palette colours only.">
            <div className={cn(ring, "size-[34px] border-[2.5px]")} style={{ borderColor: MISUSE.blue }}>
              <div className="size-[11px] rounded-full" style={{ background: MISUSE.yellow }} />
            </div>
          </MisuseTile>
          <MisuseTile title="No effects" body="No shadow, glow or gradient.">
            <div className={cn(ring, "size-[34px] border-[2.5px]")} style={{ boxShadow: MISUSE.shadow }}>
              <div className="size-[11px] rounded-full bg-accent" />
            </div>
          </MisuseTile>
          <MisuseTile title="No mid-tone grounds" body="Bone or deep green only." ground="sage">
            <BrandMark size={34} />
          </MisuseTile>
          <MisuseTile title="Never reset the type" body="The wordmark is Newsreader 400.">
            <BrandMark size={26} />
            <span className="font-sans text-[17px] font-semibold text-strong">Simpl Gateway</span>
          </MisuseTile>
        </div>
      </Row>
    </Panel>
  );
}

const CONTRAST_ROWS = [
  { key: "green", label: "Deep green", pass: "Passes", use: "Headlines, all body copy" },
  { key: "slate", label: "Secondary", pass: "Passes", use: "Supporting paragraphs, captions" },
  { key: "sage", label: "Sage", pass: "Fails", use: "Decorative only — never sentences a reader must parse" },
  { key: "terracotta", label: "Terracotta", pass: "Large only", use: "Fills, rules, numerals ≥24px" },
  { key: "terracotta-deep", label: "Terracotta deep", pass: "Passes", use: "Accent text, links on hover, small warning copy" },
] as const;

export function Colour() {
  const aaColour = { Passes: "text-healthy", Fails: "text-failed", "Large only": "text-degraded" } as const;
  const cell = "border-b py-[11px]";
  return (
    <Panel id="colour" pageBreak className="flex flex-col gap-9">
      <Row label={`${n("colour")} — Colour`}>
        <div className="mb-4 grid grid-cols-2 gap-[11px] md:grid-cols-4">
          {(["green", "terracotta", "bone", "sage"] as const).map((k) => (
            <div key={k}>
              <div
                className={cn("mb-[9px] h-[76px] rounded-[10px]", k === "bone" && "border")}
                style={{ background: hex(k) }}
              />
              <div className="text-[12.5px] font-medium text-strong">{PALETTE[k].name}</div>
              <Mono className="text-[10.5px] text-label">{hex(k)}</Mono>
            </div>
          ))}
        </div>
        <p className="m-0 max-w-[44em] text-[13px] leading-[1.6] text-muted-foreground">
          Terracotta is the only saturated colour and it appears roughly once per screen — on the primary action, or
          on the one number that matters. The moment it appears twice it stops meaning anything.
        </p>
      </Row>

      <Row label="Extended">
        <div className="grid grid-cols-3 gap-[11px] md:grid-cols-6">
          <Swatch colour="ink" />
          <Swatch colour="body" />
          <Swatch colour="slate" />
          <Swatch colour="stone" outlined />
          <Swatch colour="canvas" />
          <Swatch colour="terracotta-deep" />
        </div>
      </Row>

      <Row label="Status">
        <div className="flex flex-col gap-[34px] md:flex-row md:items-start">
          <div className="grid flex-1 grid-cols-2 gap-[11px] md:grid-cols-4">
            {STATUS.map((s) => (
              <Swatch key={s} colour={s} height={44} />
            ))}
          </div>
          <p className="m-0 flex-none text-[13px] leading-[1.6] text-muted-foreground md:w-[300px]">
            Status colours are muted on purpose: a console that is red every time a provider is slow trains people to
            ignore red. &ldquo;Not built&rdquo; is a first-class state — the roadmap uses it in public.
          </p>
        </div>
      </Row>

      <Row label="Contrast">
        <Specimen>
          <div className="overflow-x-auto">
            <div className="grid min-w-[560px] grid-cols-[2fr_1fr_1fr_2.4fr] text-[12.5px]">
              {["Pair on bone", "Ratio", "AA body", "Use"].map((h) => (
                <div key={h} className="border-b pb-[9px] font-mono text-[10px] tracking-[0.06em] text-label uppercase">
                  {h}
                </div>
              ))}
              {CONTRAST_ROWS.map((r, i) => {
                const last = i === CONTRAST_ROWS.length - 1;
                const c = last ? "py-[11px]" : cell;
                return (
                  <div key={r.key} className="contents">
                    <div className={c} style={{ color: hex(r.key) }}>
                      {r.label} {hex(r.key)}
                    </div>
                    <div className={cn(c, "font-mono text-foreground")}>{ratio(r.key, "bone")}</div>
                    <div className={cn(c, aaColour[r.pass])}>{r.pass}</div>
                    <div className={cn(c, "text-muted-foreground")}>{r.use}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Specimen>
        <p className="mt-4 mb-0 max-w-[44em] text-[13px] leading-[1.6] text-muted-foreground">
          Reversed out of deep green, bone gives {ratio("bone", "green")} and sage {ratio("sage", "green")} — sage
          stays a label colour in both directions. Text on a terracotta fill uses bone at 20px or larger; below that,
          switch the fill to terracotta deep.
        </p>
      </Row>
    </Panel>
  );
}

export function DarkMode() {
  return (
    <Specimen theme="dark" className="w-full max-w-[1240px]">
      <Panel id="dark-mode" tone="canvas">
        <Row label={`${n("dark-mode")} — Dark mode`}>
          <h2 className="mb-3.5 font-display text-[28px] leading-[1.2] font-normal text-strong">Full parity, not a filter.</h2>
          <p className="mb-6 max-w-[38em] text-[14px] leading-[1.65] text-muted-foreground">
            Every surface, every component and every state exists in both modes. Dark is built on ink — the same
            colour the code blocks and CTA bands already use in light mode, so the two modes share a family rather
            than inverting.
          </p>
          <div className="mb-[22px] grid grid-cols-3 gap-[11px] md:grid-cols-6">
            <Swatch colour="ink" name="Canvas" outlined dark />
            <Swatch colour="ink-page" name="Page" dark />
            <Swatch colour="green" name="Raised" dark />
            <Swatch colour="ink-rule" name="Border" dark />
            <Swatch colour="mist" name="Text" dark />
            <Swatch colour="terracotta-light" name="Accent" dark />
          </div>
          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-card border bg-surface px-[22px] py-5">
              <Eyebrow className="mb-3.5 text-[10px]">Same card, dark</Eyebrow>
              <div className="mb-2 font-display text-[20px] text-strong">Isolation model</div>
              <p className="mb-3.5 text-[12.5px] leading-[1.6] text-muted-foreground">
                Organisations under a BAA receive a dedicated database, a dedicated key and independent backups.
              </p>
              <div className="flex items-center gap-[9px]">
                <div className="rounded-[9px] bg-accent px-[17px] py-[9px] text-[13px] font-medium text-canvas">Create key</div>
                <div className="rounded-[9px] border px-[17px] py-[9px] text-[13px] text-foreground">Cancel</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                [
                  "Accent shifts, palette does not",
                  `Terracotta ${hex("terracotta")} on ink reaches only ${ratio("terracotta", "ink")}. Dark mode uses ${hex("terracotta-light")} for accent text and small accent fills — ${ratio("terracotta-light", "ink")} on ink, ${ratio("terracotta-light", "ink-page")} on the dark page. Large fills may still use ${hex("terracotta")}.`,
                ],
                [
                  "Status colours lighten",
                  `Healthy ${hex("healthy-light")}, degraded ${hex("degraded-light")}, failed ${hex("failed-light")}, not built ${hex("unbuilt-light")}. Dots keep the light-mode hues; text and labels use these.`,
                ],
                [
                  "No shadows in dark",
                  `Elevation is a 1px ${hex("ink-rule")} border plus one step of surface lift. Menus and dialogs get the border, not a shadow.`,
                ],
              ].map(([title, body]) => (
                <div key={title} className="rounded-card border bg-surface px-[18px] py-[15px]">
                  <div className="mb-1.5 text-[12.5px] font-medium text-strong">{title}</div>
                  <p className="m-0 text-[12px] leading-[1.55] text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 mb-0 max-w-[44em] text-[12.5px] leading-[1.6] text-muted-foreground">
            Mode follows the operating system by default with a manual override that persists. Marketing pages are
            light-only; the console, docs and playground carry both. Never mix modes on one screen.
          </p>
        </Row>
      </Panel>
    </Specimen>
  );
}

const SCALE = [
  { spec: "Display · 62/1.08/-0.022em", className: "font-display text-[44px] leading-none tracking-[-0.022em] text-strong", text: "Hero headline" },
  { spec: "H2 · 34/1.15/-0.015em", className: "font-display text-[34px] leading-[1.15] text-strong", text: "Section heading" },
  { spec: "H3 · 22/1.25", className: "font-display text-[22px] text-strong", text: "Card title" },
  { spec: "Lead · 19/1.55/300", className: "text-[19px] font-light text-muted-foreground", text: "A paragraph that carries the argument under a headline." },
  { spec: "Body · 14.5/1.62", className: "text-[14.5px] text-foreground", text: "Default running text in documents and marketing pages." },
  { spec: "UI · 13.5/1.5", className: "text-[13.5px] text-foreground", text: "Console rows, navigation, form labels." },
  { spec: "Eyebrow · 10.5/mono/0.08em", className: "font-mono text-[10.5px] tracking-[0.08em] uppercase text-label", text: "Section label" },
];

export function Typography() {
  return (
    <Panel id="typography" pageBreak className="flex flex-col gap-[34px]">
      <Row label={`${n("typography")} — Typography`}>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2 font-display text-[44px] leading-[1.05] font-light text-strong">Newsreader</div>
            <Mono className="mb-2.5 block text-[10.5px] text-label">Display · 300/400 · headlines only</Mono>
            <Body>Optical-size aware, so it holds at 62px and at 18px card titles. Never below 17px, never bold, never uppercase.</Body>
          </div>
          <div>
            <div className="mt-1.5 mb-2 text-[34px] leading-[1.1] text-strong">Geist</div>
            <Mono className="mb-2.5 block text-[10.5px] text-label">Body · 300/400/500 · UI and prose</Mono>
            <Body>
              300 for lead paragraphs at 18px and up. 400 for everything else. 500 for buttons, table headers and the
              rare inline emphasis. 600 exists but is reserved for the console.
            </Body>
          </div>
          <div>
            <div className="mt-2.5 mb-2.5 font-mono text-[26px] leading-[1.1] text-strong">Geist Mono</div>
            <Mono className="mb-2.5 block text-[10.5px] text-label">Labels, code, anything technical</Mono>
            <Body>
              Uppercase eyebrow labels at 10.5–11px with 0.08em tracking. Also model names, keys, endpoints, latencies
              and identifiers wherever they appear in prose.
            </Body>
          </div>
        </div>
      </Row>

      <Rule />

      <Row label="Scale">
        <div className="flex flex-col">
          {SCALE.map((s, i) => (
            <div
              key={s.spec}
              className={cn(
                "flex flex-col gap-2 py-3.5 md:flex-row md:items-baseline md:gap-6",
                i < SCALE.length - 1 && "border-b"
              )}
            >
              <Mono className="flex-none text-[10.5px] text-label md:w-[170px]">{s.spec}</Mono>
              <div className={s.className}>{s.text}</div>
            </div>
          ))}
          <p className="mt-[18px] mb-0 max-w-[44em] text-[13px] leading-[1.6] text-muted-foreground">
            Measure caps at 34em for body and 20em for headlines. One display size per page — a page with two 60px
            headlines has no hierarchy, it has two beginnings.
          </p>
        </div>
      </Row>
    </Panel>
  );
}

const SPACE_BAR = ["bg-line-strong", "bg-line-strong", "bg-line-strong", "bg-label/60", "bg-label/60", "bg-label", "bg-label", "bg-muted-foreground", "bg-strong"];

export function Layout() {
  return (
    <Panel id="layout">
      <Row label={`${n("layout")} — Layout`}>
        <div className="grid gap-[34px] md:grid-cols-[1.15fr_1fr_1fr]">
          <div>
            <div className="mb-3 text-[13.5px] font-medium text-strong">Spacing</div>
            <div className="mb-3 flex items-end gap-1.5">
              {SPACE.map((s, i) => (
                <div key={s} className={cn("w-3.5", SPACE_BAR[i])} style={{ height: s }} />
              ))}
            </div>
            <Mono className="mb-3 block text-[10.5px] text-label">{SPACE.join(" · ")}</Mono>
            <Body>56 is the page gutter everywhere — web, console, document. 26 separates related blocks, 44 separates arguments.</Body>
          </div>
          <div>
            <div className="mb-3 text-[13.5px] font-medium text-strong">Radii</div>
            <div className="mb-3 flex items-end gap-[9px]">
              {Object.entries(RADIUS).map(([k, r], i) => (
                <div
                  key={k}
                  className="border bg-raised"
                  style={{ width: [40, 48, 58, 68][i], height: [40, 48, 58, 68][i], borderRadius: r }}
                />
              ))}
            </div>
            <Mono className="mb-3 block text-[10.5px] text-label">
              {Object.entries(RADIUS).map(([k, r]) => `${r} ${k === "ctl" ? "control" : k}`).join(" · ")}
            </Mono>
            <Body>Radius grows with the element. Pills are for status only, never for buttons.</Body>
          </div>
          <div>
            <div className="mb-3 text-[13.5px] font-medium text-strong">Surfaces</div>
            <div className="mb-3 flex flex-col gap-[7px] text-[12px]">
              <div className="rounded-ctl bg-canvas px-3 py-[9px] text-foreground">Canvas — behind everything</div>
              <div className="rounded-ctl border bg-surface px-3 py-[9px] text-foreground">Page — the content sheet</div>
              <div className="rounded-ctl bg-raised px-3 py-[9px] text-foreground">Raised — cards inside the page</div>
              <div className="rounded-ctl bg-ink px-3 py-[9px] text-on-ink">Inverted — code, CTA bands</div>
            </div>
            <Body>
              Depth comes from tone, not shadow. The only shadow in the system is on an open menu or dialog: 0 8px
              24px rgba(18,36,31,0.12).
            </Body>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

export function Tokens() {
  const colours = Object.entries(COLOUR);
  const pad = Math.max(...colours.map(([k]) => k.length)) + 5;
  const cssBlock = (mode: "light" | "dark") =>
    colours.map(([k, v]) => (
      <div key={k}>
        {"  "}
        {`--sg-${k}:`.padEnd(pad)} <Lit>{v[mode]}</Lit>;
      </div>
    ));

  return (
    <Panel id="tokens" pageBreak className="flex flex-col gap-[30px]">
      <Row label={`${n("tokens")} — Tokens`}>
        <p className="m-0 max-w-[38em] text-[15px] leading-[1.65] text-muted-foreground">
          One naming scheme in four formats. Names are semantic, not literal — a component asks for{" "}
          <Mono className="text-[13px]">--sg-surface-raised</Mono>, never for bone. That is what makes dark mode a
          variable swap rather than a rewrite.
        </p>
      </Row>

      <Row label="CSS custom properties">
        <div className="grid gap-3.5 md:grid-cols-2">
          <CodeBlock>
            <Cm>{"/* app/tokens.css — light, default */"}</Cm>
            {"\n"}:root {"{"}
            {cssBlock("light")}
            {"}"}
          </CodeBlock>
          <CodeBlock>
            <Cm>{"/* dark — same names */"}</Cm>
            {"\n"}.dark, [data-theme=&quot;dark&quot;] {"{"}
            {cssBlock("dark")}
            {"}"}
          </CodeBlock>
        </div>
      </Row>

      <Row label="Tailwind theme">
        <div className="grid gap-3.5 md:grid-cols-2">
          <CodeBlock>
            <Cm>{"/* app/globals.css — Tailwind v4 */"}</Cm>
            {"\n"}@theme inline {"{"}
            {"\n"}  --color-canvas: <Lit>var(--sg-canvas)</Lit>;
            {"\n"}  --color-surface: <Lit>var(--sg-surface)</Lit>;
            {"\n"}  --color-raised: <Lit>var(--sg-surface-raised)</Lit>;
            {"\n"}  --color-ink: <Lit>var(--sg-surface-inverted)</Lit>;
            {"\n"}  --color-accent: <Lit>var(--sg-accent)</Lit>;
            {"\n"}  --font-display: <Lit>Newsreader, Georgia, serif</Lit>;
            {"\n"}  --font-sans: <Lit>Geist, system-ui</Lit>;
            {"\n"}  --font-mono: <Lit>&quot;Geist Mono&quot;, monospace</Lit>;
            {"\n"}  --radius-ctl: <Lit>{RADIUS.ctl}px</Lit>;  --radius-card: <Lit>{RADIUS.card}px</Lit>;
            {"\n"}  --radius-panel: <Lit>{RADIUS.panel}px</Lit>; --radius-page: <Lit>{RADIUS.page}px</Lit>;
            {"\n"}
            {"}"}
          </CodeBlock>
          <div className="flex min-w-0 flex-col gap-3.5">
            <CodeBlock>
              <Cm>{"// brand/tokens.json — DTCG shape"}</Cm>
              {"\n"}
              {'{ "colour": { "surface": {\n  "raised": {\n    "$value": '}
              <Lit>&quot;{tokens.colour.surface.raised.$value}&quot;</Lit>
              {',\n    "$extensions": { "dark": '}
              <Lit>&quot;{tokens.colour.surface.raised.$extensions.dark}&quot;</Lit>
              {" } }\n}}}"}
            </CodeBlock>
            <CodeBlock>
              <Cm>{"// lib/brand.ts — generated"}</Cm>
              {"\n"}export const SPACE = [{SPACE.join(",")}] as const;
              {"\n"}export const RADIUS = {JSON.stringify(RADIUS).replace(/"/g, "").replace(/,/g, ", ")};
              {"\n"}export const MOTION = {"{"} fast:{MOTION.fast}, enter:{MOTION.enter}, panel:{MOTION.panel},
              {"\n"}  ease:<Lit>&quot;{MOTION.ease}&quot;</Lit> {"}"};
              {"\n"}export const STATUS = [{STATUS.slice(0, 2).map((s) => `"${s}"`).join(",")},
              {"\n"}  {STATUS.slice(2).map((s) => `"${s}"`).join(",")}] as const;
            </CodeBlock>
          </div>
        </div>
      </Row>

      <Row label="Rules">
        <div className="grid gap-[18px] md:grid-cols-3">
          <InfoCard title="Prefix everything">
            <Mono>--sg-</Mono> so tokens survive alongside a client&rsquo;s stylesheet or a third-party component
            library.
          </InfoCard>
          <InfoCard title="JSON is the source">
            CSS and TS are generated from <Mono>brand/tokens.json</Mono> with <Mono>pnpm tokens</Mono>. Edit a hex in
            one place only; a hand-edited variable is a bug.
          </InfoCard>
          <InfoCard title="No raw hex in components">
            A literal hex in component code is a review comment. The one exception is a hard-coded brand asset like a
            favicon.
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

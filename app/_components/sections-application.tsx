import { BrandMark, Lockup, StatusPill } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOTION, RADIUS, SPACE } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { n } from "./sections";
import {
  Body,
  Caption,
  Cm,
  CodeBlock,
  Eyebrow,
  Hatched,
  InfoCard,
  Lead,
  Lit,
  Mono,
  Note,
  Panel,
  Row,
  Rule,
  Specimen,
  hex,
} from "./ui";


function Illustrative() {
  return <Caption className="mt-3">Illustrative values — not measured figures.</Caption>;
}

export function Components() {
  const th = "border-b pb-[9px] font-mono text-[10px] tracking-[0.06em] text-label uppercase";
  const td = "border-b py-3";
  return (
    <Panel id="components" pageBreak className="flex flex-col gap-[34px]">
      <Row label={`${n("components")} — Components`}>
        <div className="grid gap-[34px] md:grid-cols-2">
          <div>
            <div className="mb-3.5 text-[13.5px] font-medium text-strong">Buttons</div>
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <Button variant="accent">Join the waitlist</Button>
              <Button>Create key</Button>
              <Button variant="outline">Read the security model</Button>
              <Button variant="link" className="px-1">Cancel</Button>
            </div>
            <Body>
              One terracotta button per view. Deep green is the workhorse inside the console, where a terracotta
              button would fire every few seconds. Height 44px, label 14.5/500, never uppercase.
            </Body>
          </div>
          <div>
            <div className="mb-3.5 text-[13.5px] font-medium text-strong">Status</div>
            <div className="mb-3 flex flex-wrap gap-[9px]">
              <StatusPill status="healthy" />
              <StatusPill status="degraded" />
              <StatusPill status="failed" />
              <StatusPill status="unbuilt" />
            </div>
            <Body>Always a dot plus a word. Colour alone is not a state — it fails for colour-blind readers and it fails in print.</Body>
          </div>
          <div>
            <div className="mb-3.5 text-[13.5px] font-medium text-strong">Inputs</div>
            <div className="mb-3 flex flex-col gap-[9px]">
              <Input readOnly aria-label="Email, empty" placeholder="work@hospital.org" tabIndex={-1} />
              <Input
                readOnly
                aria-label="Key, focused"
                value="sk_live_·······················"
                tabIndex={-1}
                className="border-strong ring-[0.5px] ring-strong"
              />
              <Input readOnly aria-label="Key, invalid" aria-invalid value="Key must belong to this org" tabIndex={-1} />
            </div>
            <Body>Focus is a 1.5px deep-green border, no glow. Errors state the fix, not the failure.</Body>
          </div>
          <div>
            <div className="mb-3.5 text-[13.5px] font-medium text-strong">Code and data</div>
            <CodeBlock className="mb-3 text-[12.5px] leading-[1.8]">
              <Cm># redaction is not optional</Cm>
              {"\n"}POST /v1/chat/completions <Lit>200</Lit> <span className="text-label">412ms</span>
            </CodeBlock>
            <Body>
              Code sits on ink, never on bone. Comments in {hex("comment")}, literals and status in terracotta,
              timings in sage. Two accent colours maximum in any block.
            </Body>
          </div>
        </div>
      </Row>

      <Rule />

      <Row label="Tables">
        <div className="overflow-x-auto">
          <div className="grid min-w-[480px] grid-cols-[1.6fr_1fr_1fr_1fr] text-[13px]">
            <div className={th}>Model</div>
            <div className={th}>Provider</div>
            <div className={cn(th, "text-right")}>p50</div>
            <div className={cn(th, "text-right")}>Requests</div>
            {[
              ["Claude Sonnet 4.5", "Anthropic", "412ms", "18,204"],
              ["GPT-4.1 mini", "OpenAI", "288ms", "9,431"],
            ].map(([model, provider, p50, reqs]) => (
              <div key={model} className="contents">
                <div className={cn(td, "text-foreground")}>{model}</div>
                <div className={cn(td, "text-muted-foreground")}>{provider}</div>
                <div className={cn(td, "text-right font-mono text-foreground tabular-nums")}>{p50}</div>
                <div className={cn(td, "text-right font-mono text-foreground tabular-nums")}>{reqs}</div>
              </div>
            ))}
          </div>
        </div>
        <Illustrative />
        <p className="mt-3.5 mb-0 max-w-[44em] text-[12.5px] leading-[1.55] text-muted-foreground">
          Numbers are mono, right-aligned, tabular. Rows are separated by a hairline, never by fill — zebra striping
          in a bone palette reads as damage. Row height 44px in the console, 40px in documents.
        </p>
      </Row>
    </Panel>
  );
}

function StateTile({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex h-[132px] flex-col justify-center gap-[9px] rounded-card bg-raised p-5">{children}</div>
      <div className="mt-[9px] text-[12.5px] font-medium text-strong">{title}</div>
      <div className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">{body}</div>
    </div>
  );
}

export function UiStates() {
  return (
    <Panel id="ui-states">
      <Row label={`${n("ui-states")} — UI states`}>
        <Lead className="mb-[22px]">
          Every view ships four states. The empty state is the one users see first and the one most products leave
          until last.
        </Lead>
        <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-4">
          <StateTile title="Empty" body="A sentence explaining what fills it, and the action that does.">
            <div className="font-display text-[17px] text-strong">No requests yet</div>
            <p className="m-0 text-[11.5px] leading-[1.55] text-muted-foreground">
              Issue a key and send your first call. The log fills in real time.
            </p>
            <div className="self-start rounded-ctl bg-primary px-3.5 py-2 text-[12px] font-medium text-primary-foreground">
              Create key
            </div>
          </StateTile>
          <StateTile title="Loading" body="Skeletons in the shape of the content. No spinners, no progress bars, no “Loading…”.">
            {["w-[62%]", "w-[88%]", "w-[74%]", "w-[40%]"].map((w, i) => (
              <div key={w} className={cn("h-[11px] rounded-[4px]", w, i < 2 ? "bg-border" : "bg-border/60")} />
            ))}
          </StateTile>
          <StateTile title="Error" body="What happened, what the system did about it, and the identifier support will ask for.">
            <StatusPill status="failed" className="self-start px-3 py-[5px] text-[11.5px]" />
            <p className="m-0 text-[11.5px] leading-[1.55] text-foreground">
              The redactor did not respond, so the request was refused rather than sent.
            </p>
            <Mono className="text-[10.5px] text-muted-foreground">req_8c41f0 · 14:22:07 UTC</Mono>
          </StateTile>
          <StateTile title="Degraded" body="Show the data you have and say what is missing. Never present a partial number as complete.">
            <StatusPill status="degraded" className="self-start px-3 py-[5px] text-[11.5px]">Partial</StatusPill>
            <p className="m-0 text-[11.5px] leading-[1.55] text-foreground">
              Anthropic is responding; OpenAI is timing out. Figures below cover one provider.
            </p>
          </StateTile>
        </div>
        <p className="mt-5 mb-0 max-w-[52em] text-[12.5px] leading-[1.6] text-muted-foreground">
          Error copy names the fix where one exists and never blames the user. No apologies, no &ldquo;oops&rdquo;, no
          exclamation marks. Every error carries a request id in mono, because the next thing that happens is someone
          pasting it into a support thread.
        </p>
      </Row>
    </Panel>
  );
}

const LATENCY = [44, 52, 39, 61, 48, 55, 71, 64, 58, 80, 69, 74, 66, 92];

export function Data() {
  const tile = "flex h-[150px] flex-col rounded-card bg-raised p-5";
  const chartLabel = "font-mono text-[9.5px] tracking-[0.08em] text-label uppercase";
  return (
    <Panel id="data" pageBreak>
      <Row label={`${n("data")} — Data`}>
        <Lead className="mb-[22px]">
          Charts in this system are read by people deciding whether to trust a number. They are plain, labelled and
          honest about their axes.
        </Lead>
        <div className="mb-6 grid gap-6 md:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <div className={tile}>
              <div className={cn(chartLabel, "mb-3")}>p50 latency · 14 days · ms</div>
              <div className="flex flex-1 items-end gap-[5px]" role="img" aria-label="Bar chart of daily p50 latency, rising towards the last day">
                {LATENCY.map((h, i) => (
                  <div
                    key={i}
                    className={cn("flex-1 rounded-t-[2px]", i === LATENCY.length - 1 ? "bg-accent" : "bg-label")}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="h-px bg-line-strong" />
              <div className="mt-1.5 flex justify-between font-mono text-[9.5px] text-label">
                <span>25 Aug</span>
                <span>8 Sep</span>
              </div>
            </div>
            <Body className="mt-2.5">Series in sage; terracotta marks the one bar the caption is about. One accent per chart.</Body>
          </div>
          <div>
            <div className={cn(tile, "justify-between")}>
              <div className={chartLabel}>Requests by provider</div>
              <div>
                {[
                  ["Anthropic", "18,204", "66%", "bg-strong"],
                  ["OpenAI", "9,431", "34%", "bg-label"],
                ].map(([name, v, w, c], i) => (
                  <div key={name}>
                    <div className="mb-[5px] flex justify-between text-[11.5px] text-foreground">
                      <span>{name}</span>
                      <Mono>{v}</Mono>
                    </div>
                    <div className={cn("h-2 rounded-[4px] bg-border", i === 0 && "mb-[11px]")}>
                      <div className={cn("h-2 rounded-[4px]", c)} style={{ width: w }} />
                    </div>
                  </div>
                ))}
              </div>
              <Mono className="text-[9.5px] text-label">n = 27,635 · last 24h</Mono>
            </div>
            <Body className="mt-2.5">Composition is a stacked or paired bar with the value printed. Never a pie, never a donut, never a gauge.</Body>
          </div>
          <div>
            <div className={cn(tile, "gap-[11px]")}>
              <div className={chartLabel}>Ordered series palette</div>
              <div className="flex flex-col gap-[7px]">
                {(["green", "sage", "terracotta", "healthy", "degraded"] as const).map((k, i) => (
                  <div key={k} className="flex items-center gap-[9px]">
                    <span className="h-2 w-[22px] rounded-[2px]" style={{ background: hex(k) }} />
                    <Mono className="text-[10.5px] leading-none text-muted-foreground">
                      {i + 1} · {hex(k)}
                    </Mono>
                  </div>
                ))}
              </div>
            </div>
            <Body className="mt-2.5">Take colours in order and stop at five. A sixth series means the chart should be a table.</Body>
          </div>
        </div>
        <Illustrative />
        <div className="mt-5 grid gap-[18px] sm:grid-cols-2 md:grid-cols-4">
          <InfoCard title="Axes start at zero">
            Unless the chart is a latency trend, where a zero baseline hides the signal — then label the floor explicitly.
          </InfoCard>
          <InfoCard title="Units and n, always">
            Every chart states its unit, window and sample size in mono. A figure without a window is not a figure.
          </InfoCard>
          <InfoCard title="No gridlines">
            One hairline baseline at {hex("rule-strong")}. Values are printed where they matter instead of inferred from a grid.
          </InfoCard>
          <InfoCard title="Never invent data">
            Marketing charts use real measured figures or none. A plausible-looking mock in a deck is a claim you will
            be asked to reproduce.
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

export function Imagery() {
  return (
    <Panel id="imagery">
      <Row label={`${n("imagery")} — Imagery`}>
        <div className="grid items-start gap-6 md:grid-cols-3">
          <div>
            <Hatched label="architecture diagram" className="mb-2.5 h-[120px]" />
            <Body>Preferred imagery is a diagram: boundaries, flows, what crosses them. Drawn in palette colours at 1px, labelled in mono.</Body>
          </div>
          <div>
            <Hatched label="product screenshot" className="mb-2.5 h-[120px]" />
            <Body>Screenshots are real, never mocked with invented metrics. Crop tight, no device frames, no floating perspective.</Body>
          </div>
          <div>
            <div className="mb-2.5 flex h-[120px] items-center justify-center gap-3 rounded-card bg-raised">
              <div className="size-[18px] rounded-[4px] border-[1.5px] border-strong" />
              <div className="size-[18px] rounded-full border-[1.5px] border-strong" />
              <div className="size-[18px] rotate-45 border-[1.5px] border-strong" />
            </div>
            <Body>
              Icons: 1.5px stroke, 20px box, square ends, no fills. Geometry only. No stethoscopes, no shields, no
              clip-art padlocks — the brand argues in words and diagrams.
            </Body>
          </div>
          <div className="grid gap-[18px] md:col-span-3 md:grid-cols-3">
            <InfoCard title="No stock photography">
              No clinicians at laptops, no server rooms, no handshakes. If a photograph is genuinely needed it is of a
              real person on the team, on a bone ground, uncropped and unfiltered.
            </InfoCard>
            <InfoCard title="No generated imagery">
              An AI infrastructure company that illustrates itself with AI-generated art invites exactly the question
              it does not want asked. Diagrams instead.
            </InfoCard>
            <InfoCard title="Placeholders are labelled">
              Until real assets exist, use the hatched block with a mono caption naming what belongs there. Never a
              grey box, never a filler photo.
            </InfoCard>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

export function Social() {
  const sizes = [
    ["OG image", "1200×630"],
    ["LinkedIn banner", "1128×191"],
    ["Avatar", "400×400"],
    ["Favicon", "32 / 180"],
    ["Safe area", "56px inset"],
  ];
  return (
    <Panel id="social">
      <Row label={`${n("social")} — Social`}>
        <Lead className="mb-[22px]">
          Social assets carry one line of type and the mark. They are read at thumbnail size in a feed, so nothing
          smaller than 28px survives.
        </Lead>
        <div className="grid items-start gap-5 md:grid-cols-[1.9fr_1fr_1fr]">
          <div>
            <Specimen className="flex min-h-[158px] flex-col justify-between gap-3 rounded-card bg-ink px-[30px] py-[26px]">
              <Lockup tone="reversed" markSize={20} wordmarkClassName="text-[17px]" />
              <div className="max-w-[22em] font-display text-[22px] leading-[1.15] font-light text-on-ink-strong lg:text-[24px]">
                One key, every model — inside a boundary you can audit
              </div>
              <Mono className="text-[10px] tracking-[0.08em] text-comment uppercase">gateway.simplsolutions.io</Mono>
            </Specimen>
            <Caption>OG / Twitter card · 1200 × 630 · ink ground, 56px padding, one headline</Caption>
          </div>
          <div>
            <Specimen className="flex min-h-[158px] items-end justify-center gap-3 rounded-card bg-raised p-5">
              {[
                [72, 33, "400px"],
                [36, 17, "48px"],
              ].map(([box, mark, label]) => (
                <div key={label} className="text-center">
                  <div
                    className="mb-2 flex items-center justify-center rounded-full bg-strong"
                    style={{ width: box as number, height: box as number }}
                  >
                    <BrandMark size={mark as number} tone="reversed" />
                  </div>
                  <Mono className="text-[9.5px] text-label">{label}</Mono>
                </div>
              ))}
            </Specimen>
            <Caption>Avatar · circular crop, mark only, never the wordmark</Caption>
          </div>
          <div>
            <div className="flex min-h-[158px] flex-col gap-2 rounded-card bg-raised p-[18px] text-[12px] leading-[1.3] text-foreground">
              <Eyebrow className="text-[9.5px]">Sizes</Eyebrow>
              {sizes.map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span>{k}</span>
                  <Mono className="text-muted-foreground">{v}</Mono>
                </div>
              ))}
            </div>
            <Caption>Every asset also exists at 2×</Caption>
          </div>
        </div>
        <p className="mt-5 mb-0 max-w-[52em] text-[12.5px] leading-[1.6] text-muted-foreground">
          Every page sets its own OG headline — the same sentence as the page&rsquo;s H1, never a generic tagline. Do
          not publish a card that points at a URL which is not yet serving the product.
        </p>
      </Row>
    </Panel>
  );
}

export function Motion() {
  return (
    <Panel id="motion">
      <Row label={`${n("motion")} — Motion`}>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2 text-[13.5px] font-medium text-strong">Durations</div>
            <div className="font-mono text-[11.5px] leading-[2.1] whitespace-pre text-muted-foreground">
              <div>{`${MOTION.fast}ms  hover, focus`}</div>
              <div>{`${MOTION.enter}ms  enter, expand`}</div>
              <div>{`${MOTION.panel}ms  panel, drawer`}</div>
              <div>{"0ms    data updates"}</div>
            </div>
          </div>
          <div>
            <div className="mb-2 text-[13.5px] font-medium text-strong">Easing</div>
            <Mono className="text-[11.5px] leading-[1.9] text-muted-foreground">{MOTION.ease.replace(/,/g, ", ")}</Mono>
            <Body className="mt-2.5">One curve for everything. No spring, no bounce, no overshoot.</Body>
          </div>
          <div>
            <div className="mb-2 text-[13.5px] font-medium text-strong">Rules</div>
            <Body>
              Motion confirms an action or reveals structure; it never decorates. Numbers in the console change
              instantly — an animated counter on a latency figure is a lie about when the value arrived. Everything
              respects prefers-reduced-motion.
            </Body>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

export function Accessibility() {
  return (
    <Panel id="accessibility" pageBreak>
      <Row label={`${n("accessibility")} — Accessibility`}>
        <Lead className="mb-[22px]">
          WCAG 2.2 AA is the floor, and it is a procurement requirement rather than a preference — public-sector and
          hospital buyers ask for a conformance statement. Treat a failure as a bug, not a polish item.
        </Lead>
        <div className="mb-6 grid gap-[18px] md:grid-cols-3">
          <InfoCard title="Focus">
            <div className="mb-[11px] flex items-center gap-2.5 rounded-[9px] bg-surface p-3">
              <div className="rounded-ctl bg-primary px-4 py-[9px] text-[12.5px] font-medium text-primary-foreground outline-2 outline-offset-2 outline-accent outline-solid">
                Create key
              </div>
              <div className="rounded-ctl border border-line-strong px-4 py-[9px] text-[12.5px] text-strong">Cancel</div>
            </div>
            <p>
              A 2px terracotta ring at 2px offset, visible on every focusable element in both modes. Never{" "}
              <Mono>outline: none</Mono> without a replacement.
            </p>
          </InfoCard>
          <InfoCard title="Targets and text">
            <div className="mb-[11px] flex flex-col gap-2 text-[12px] text-foreground">
              {[
                ["Hit target", "44 × 44 min"],
                ["Body text", "14.5px min"],
                ["Mono labels", "10.5px min"],
                ["Zoom", "200% no loss"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span>{k}</span>
                  <Mono className="text-muted-foreground">{v}</Mono>
                </div>
              ))}
            </div>
            <p>Nothing is conveyed by colour, hover or position alone. Every status has a word; every icon-only control has a label.</p>
          </InfoCard>
          <InfoCard title="Behaviour">
            <p className="mb-[9px]!">
              Full keyboard operation with a visible skip link. Dialogs trap focus and return it. Live regions announce
              status changes politely, never assertively.
            </p>
            <p>
              <Mono>prefers-reduced-motion</Mono> removes transitions rather than shortening them.
            </p>
          </InfoCard>
        </div>
        <div className="flex flex-col gap-3.5 md:flex-row">
          <div className="flex-1 rounded-card bg-healthy/12 px-[18px] py-[15px]">
            <Eyebrow className="mb-1.5 text-[9.5px] text-healthy">Ship-blocking</Eyebrow>
            <p className="m-0 text-[12px] leading-[1.55] text-foreground">
              Contrast below 4.5:1 on body text · an unlabelled control · a keyboard trap · a colour-only status · a
              focus style removed.
            </p>
          </div>
          <div className="flex-1 rounded-card bg-raised px-[18px] py-[15px]">
            <Eyebrow className="mb-1.5 text-[9.5px]">Checked before release</Eyebrow>
            <p className="m-0 text-[12px] leading-[1.55] text-muted-foreground">
              Automated axe pass on every route, plus one keyboard-only walkthrough of the console per release. Record
              the date; an unchecked claim of AA is the kind of claim this brand does not make.
            </p>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

const SAY = [
  ["A database per regulated tenant", "Bank-grade multi-tenancy"],
  ["The request is refused rather than sent", "Rock-solid reliability"],
  ["Not built yet — see the roadmap", "Coming soon!"],
  ["Designed against the HIPAA Security Rule", "HIPAA certified"],
  ["You hold the encryption key", "Military-grade encryption"],
  ["Pricing is not baselined yet", "Any figure, range or “from £x”"],
];

export function Voice() {
  return (
    <Panel id="voice" pageBreak className="flex flex-col gap-[34px]">
      <Row label={`${n("voice")} — Voice`}>
        <div className="grid gap-[18px] md:grid-cols-3">
          {[
            ["Specific over superlative", "“Fails closed when the redactor is unavailable” beats “enterprise-grade security”. Engineers verify claims; adjectives give them nothing to verify."],
            ["Name the gaps", "Publishing what isn’t built yet is the cheapest credibility available to a pre-launch company, and the only one a CISO trusts."],
            ["Plain, not casual", "The reader may be a hospital CIO. Short sentences and ordinary words — but no jokes, no exclamation marks, no emoji."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-card bg-raised px-[19px] py-[17px]">
              <div className="mb-[7px] font-display text-[18px] text-strong">{t}</div>
              <Body>{b}</Body>
            </div>
          ))}
        </div>
      </Row>

      <Row label="Say / don't say">
        <div className="grid grid-cols-2 gap-x-[34px] text-[13px]">
          <div className="border-b pb-[9px] font-mono text-[10px] tracking-[0.06em] text-healthy uppercase">Say</div>
          <div className="border-b pb-[9px] font-mono text-[10px] tracking-[0.06em] text-failed uppercase">Don&rsquo;t</div>
          {SAY.map(([say, dont], i) => (
            <div key={say} className="contents">
              <div className={cn("py-[11px] text-foreground", i < SAY.length - 1 && "border-b")}>{say}</div>
              <div className={cn("py-[11px] text-muted-foreground", i < SAY.length - 1 && "border-b")}>{dont}</div>
            </div>
          ))}
        </div>
      </Row>

      <Row label="Mechanics">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["The name", "“Simpl Gateway” on first mention, “the gateway” after. Never “SimplGateway”, never “SG”. Features take a lowercase common noun: the Simpl Gateway console, the docs."],
            ["Terms", "PHI, BAA, KMS, SOC 2 (space, no roman numerals), HIPAA Security Rule. Expand an acronym once per document, then use it. Model and endpoint names in mono, exactly as the provider spells them."],
            ["Style", "Sentence case for every heading, button and label. British spelling in prose. Dates as 21 Aug 2026. Latencies in ms, throughput per minute. No exclamation marks anywhere, including error messages."],
          ].map(([t, b]) => (
            <div key={t}>
              <div className="mb-2 text-[13.5px] font-medium text-strong">{t}</div>
              <Body className="leading-[1.6]">{b}</Body>
            </div>
          ))}
        </div>
      </Row>
    </Panel>
  );
}

export function Legal() {
  return (
    <Panel id="legal">
      <Row label={`${n("legal")} — Legal`}>
        <Lead className="mb-[22px]">The brand makes claims a lawyer may be asked to defend. These are the ones with a fixed form.</Lead>
        <div className="mb-[22px] grid gap-[18px] md:grid-cols-2">
          <InfoCard title="Marks and symbols">
            <p className="mb-2!">
              No ® anywhere — no registration has been granted. Use ™ only if and when an application is filed, on
              first mention of a page and nowhere else. The mark and wordmark are unregistered and, per section 03, not
              yet final.
            </p>
            <p>
              Third-party names — Anthropic, OpenAI, Claude, Google — appear exactly as their owners spell them, in
              plain text, never in a logo wall implying partnership.
            </p>
          </InfoCard>
          <InfoCard title="Fixed strings">
            <div className="font-mono text-[11.5px] leading-[1.9] text-foreground">
              <div>© 2026 Simpl Solutions Ltd</div>
              <div>Simpl Gateway, from Simpl Solutions</div>
              <div>gateway.simplsolutions.io</div>
            </div>
            <p className="mt-[9px]!">
              Footer order: copyright, entity, then legal links. The entity name — not the product — signs contracts,
              BAAs and privacy notices.
            </p>
          </InfoCard>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          {[
            ["Never claim", "Certification that has not been granted. “SOC 2 compliant” and “HIPAA certified” are both false today. Say “designed against”, or name the stage the audit is at."],
            ["Never quote", "A price, a per-run cost or a margin. Compute cost has never been baselined, so any figure in a deck or a page is invented until finance publishes one."],
            ["Never imply", "That a client’s data, console or credits belong to Simpl Solutions. The client owns their data and their AI console; Simpl Solutions owns the processing system. Every diagram and every deck draws that line the same way."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-card bg-failed/12 px-[18px] py-[15px]">
              <Eyebrow className="mb-1.5 text-[9.5px] text-failed">{t}</Eyebrow>
              <p className="m-0 text-[12px] leading-[1.55] text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Row>
    </Panel>
  );
}

function ClientMark() {
  return <Mono className="text-[11px] tracking-[0.06em] text-muted-foreground uppercase">Client</Mono>;
}

export function CoBranding() {
  const tile = "flex h-[104px] items-center justify-center gap-[18px] rounded-card bg-raised p-[22px]";
  const divider = <span className="h-[26px] w-px bg-line-strong" />;
  return (
    <Panel id="co-branding">
      <Row label={`${n("co-branding")} — Co-branding`}>
        <Lead className="mb-[22px]">
          Client work carries two marks. The pairing states who made the thing and who owns the data, which in this
          business is the same question asked twice.
        </Lead>
        <div className="mb-6 grid gap-5 md:grid-cols-3">
          <div>
            <Specimen className={tile}>
              <Lockup markSize={20} wordmarkClassName="text-[17px]" />
              {divider}
              <ClientMark />
            </Specimen>
            <Caption>Ours first · our document, our deck</Caption>
          </div>
          <div>
            <Specimen className={tile}>
              <ClientMark />
              {divider}
              <Lockup markSize={20} wordmarkClassName="text-[17px]" />
            </Specimen>
            <Caption>Theirs first · deliverables in their Drive</Caption>
          </div>
          <div>
            <Specimen className={cn(tile, "border")}>
              <div className="flex items-center">
                <div className="relative z-10 rounded-full bg-surface">
                  <BrandMark size={26} />
                </div>
                <div className="-ml-[9px] size-[26px] rounded-full border-2 border-label" />
              </div>
            </Specimen>
            <div className="mt-[9px] text-[12.5px] font-medium text-accent-text">Never merge the marks</div>
            <div className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">No interlocking, no shared ring, no invented joint logo.</div>
          </div>
        </div>
        <div className="grid gap-[18px] sm:grid-cols-2 md:grid-cols-4">
          <InfoCard title="Equal weight">
            Marks are optically matched in height, separated by a 1px rule with 18px either side. Neither is scaled to dominate.
          </InfoCard>
          <InfoCard title="Our palette holds">
            A client&rsquo;s colours never enter the gateway UI or a Simpl-authored document. Their mark appears in
            their own colours; everything around it stays bone and deep green.
          </InfoCard>
          <InfoCard title="Deliverables are unbranded">
            Documents the gateway generates into a client&rsquo;s Drive carry the client&rsquo;s identity, not ours.
            The processing system is not a watermark on their work.
          </InfoCard>
          <InfoCard title="Ask before publishing">
            No client name, logo or screenshot goes on a public page, deck or case study without written permission.
            Until then a client is &ldquo;a US managed service provider&rdquo;.
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

export function Applications() {
  const frame = "rounded-card border bg-surface";
  return (
    <Panel id="applications" pageBreak>
      <Row label={`${n("applications")} — Applications`}>
        <div className="flex flex-col gap-5">
          <div>
            <Specimen className={cn(frame, "overflow-hidden")}>
              <div className="flex flex-wrap items-center justify-between gap-4 px-[22px] py-4">
                <Lockup wordmarkClassName="text-[18px]" />
                <div className="flex items-center gap-[26px] text-[13px] text-muted-foreground">
                  <span>Security</span>
                  <span>Docs</span>
                  <span>Writing</span>
                  <span className="rounded-ctl bg-primary px-[15px] py-2 text-[12.5px] text-primary-foreground">Join the waitlist</span>
                </div>
              </div>
            </Specimen>
            <Caption>Marketing nav — logo left, one filled action right, nothing else</Caption>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Specimen className={cn(frame, "flex h-[150px] overflow-hidden")}>
                <div className="flex w-[170px] flex-none flex-col gap-[11px] bg-ink px-3.5 py-4 leading-none">
                  <Lockup tone="reversed" markSize={18} className="mb-[5px] gap-2" wordmarkClassName="text-[15px]" />
                  <div className="text-[12px] text-on-ink-strong">Overview</div>
                  <div className="text-[12px] text-label">Requests</div>
                  <div className="text-[12px] text-label">Providers</div>
                  <div className="text-[12px] text-label">Audit log</div>
                </div>
                <div className="flex-1 px-5 py-[18px]">
                  <Eyebrow className="mb-3 text-[10px]">Last 24 hours</Eyebrow>
                  <div className="flex gap-[30px]">
                    {[
                      ["27,635", "requests", "text-accent"],
                      ["412ms", "p50 latency", "text-strong"],
                      ["0", "redaction failures", "text-strong"],
                    ].map(([v, l, c]) => (
                      <div key={l}>
                        <Mono className={cn("text-[26px]", c)}>{v}</Mono>
                        <div className="text-[11.5px] text-muted-foreground">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Specimen>
              <Caption>Console — ink sidebar, bone content, one terracotta figure</Caption>
            </div>
            <div>
              <Specimen className={cn(frame, "h-[150px] px-[22px] py-5")}>
                <Eyebrow className="mb-3 text-[9.5px]">Simpl Gateway · Security · Aug 2026</Eyebrow>
                <div className="mb-2.5 font-display text-[24px] leading-[1.15] text-strong">Isolation model</div>
                <div className="mb-2.5 h-px bg-border" />
                <p className="m-0 text-[11.5px] leading-[1.6] text-muted-foreground">
                  Organisations under a BAA receive a dedicated Postgres project, a dedicated key and independent backups.
                </p>
              </Specimen>
              <Caption>Document — mono running head, serif title, hairline rule</Caption>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <Specimen className="flex h-[118px] flex-col justify-between rounded-card bg-ink p-[22px]">
                <div className="font-display text-[22px] leading-[1.15] text-on-ink-strong">PHI stops at the boundary</div>
                <Mono className="text-[9.5px] tracking-[0.08em] text-comment uppercase">Simpl Gateway · 04</Mono>
              </Specimen>
              <Caption>Slide — one claim, mono footer</Caption>
            </div>
            <div>
              <Specimen className={cn(frame, "flex h-[118px] flex-col justify-center px-[22px] py-5")}>
                <div className="text-[13px] font-medium text-strong">Name Surname</div>
                <div className="mb-[9px] text-[12px] text-muted-foreground">Security engineering</div>
                <div className="flex items-center gap-2">
                  <BrandMark size={16} />
                  <Mono className="text-[10.5px] text-muted-foreground">simplsolutions.io</Mono>
                </div>
              </Specimen>
              <Caption>Email signature — no image, no quote</Caption>
            </div>
            <div>
              <Specimen className="flex h-[118px] items-center justify-center gap-4 rounded-card bg-raised p-[22px]">
                <div className="flex size-11 items-center justify-center rounded-[10px] bg-strong">
                  <BrandMark size={20} tone="reversed" />
                </div>
                <div className="flex size-[26px] items-center justify-center rounded-[6px] bg-strong">
                  <BrandMark size={13} tone="reversed" />
                </div>
                <div className="flex size-4 items-center justify-center rounded-[4px] bg-strong">
                  <BrandMark size={6} tone="reversed" />
                </div>
              </Specimen>
              <Caption>App icon at 44, 26, 16 — ring drops at the smallest size</Caption>
            </div>
          </div>
          <Illustrative />
        </div>
      </Row>
    </Panel>
  );
}

function SlideThumb({ caption, className, children }: { caption: string; className?: string; children: React.ReactNode }) {
  return (
    <div>
      <Specimen className={cn("h-[104px] rounded-[10px] p-5", className)}>{children}</Specimen>
      <Mono className="mt-[7px] block text-[10px] text-label">{caption}</Mono>
    </div>
  );
}

export function Deck() {
  const spec = (rows: [string, string][]) => (
    <div className="flex flex-col gap-1.5 text-[12px] text-foreground">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between">
          <span>{k}</span>
          <Mono className="text-muted-foreground">{v}</Mono>
        </div>
      ))}
    </div>
  );
  return (
    <Panel id="deck" pageBreak className="flex flex-col gap-[34px]">
      <Row label={`${n("deck")} — Deck and document`}>
        <Lead className="mb-5">Six slide layouts and one document anatomy. A deck that needs a seventh layout usually needs fewer slides.</Lead>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <SlideThumb caption="Title · ink" className="flex flex-col justify-between bg-ink">
            <div className="flex items-center gap-2">
              <BrandMark size={15} tone="reversed" />
              <Mono className="text-[9px] tracking-[0.08em] text-comment uppercase">Simpl Gateway</Mono>
            </div>
            <div className="font-display text-[19px] leading-[1.15] font-light text-on-ink-strong">Isolation, in one deck</div>
          </SlideThumb>
          <SlideThumb caption="Section break · deep green" className="flex items-center bg-strong">
            <Mono className="w-[26px] text-[9px] tracking-[0.08em] text-label uppercase">02</Mono>
            <div className="font-display text-[19px] text-on-ink-strong">The boundary</div>
          </SlideThumb>
          <SlideThumb caption="One claim · bone" className="flex flex-col justify-center gap-[7px] border bg-surface">
            <div className="font-display text-[17px] leading-[1.2] text-strong">PHI never reaches a provider unredacted</div>
            <div className="text-[10.5px] text-muted-foreground">The redactor runs inside the boundary; a failure refuses the request.</div>
          </SlideThumb>
          <SlideThumb caption="Diagram + caption" className="flex items-center gap-3 border bg-surface p-4">
            <Hatched className="h-full flex-1 rounded-[7px]" />
            <div className="w-[74px] text-[10px] leading-[1.5] text-muted-foreground">Caption carries the argument, diagram carries the proof.</div>
          </SlideThumb>
          <SlideThumb caption="Table · state in words" className="flex flex-col gap-[7px] border bg-surface px-[18px] py-4">
            <div className="flex justify-between border-b pb-[5px] font-mono text-[9px] tracking-[0.06em] text-label uppercase">
              <span>Control</span>
              <span>State</span>
            </div>
            <div className="flex justify-between border-b pb-[5px] text-[10.5px] text-foreground">
              <span>Audit log</span>
              <span className="text-healthy">Built</span>
            </div>
            <div className="flex justify-between text-[10.5px] text-foreground">
              <span>Key rotation</span>
              <span className="text-unbuilt">Not built</span>
            </div>
          </SlideThumb>
          <SlideThumb caption="Closing · the ask, endorsement line" className="flex flex-col justify-between bg-ink">
            <div className="font-display text-[17px] leading-[1.2] text-on-ink-strong">What we need from you</div>
            <Mono className="text-[9px] tracking-[0.08em] text-comment uppercase">Simpl Gateway, from Simpl Solutions</Mono>
          </SlideThumb>
        </div>
      </Row>

      <Rule />

      <Row label="Specifications">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2.5 text-[13.5px] font-medium text-strong">Slides</div>
            {spec([
              ["Canvas", "1920 × 1080"],
              ["Margin", "96px"],
              ["Slide title", "64px Newsreader"],
              ["Body", "28px min"],
              ["Footer", "18px mono"],
            ])}
            <Body className="mt-2.5 text-[12px]">One idea per slide. No bullet lists longer than four items, no builds, no transitions.</Body>
          </div>
          <div>
            <div className="mb-2.5 text-[13.5px] font-medium text-strong">Documents</div>
            {spec([
              ["Page", "A4 · 20mm"],
              ["Body", "11pt / 1.6"],
              ["Measure", "34em max"],
              ["Running head", "8pt mono"],
              ["Numbering", "§ per section"],
            ])}
            <Body className="mt-2.5 text-[12px]">
              Running head carries product, section and month. Every document opens with what it asserts and when it
              was last verified.
            </Body>
          </div>
          <div>
            <div className="mb-2.5 text-[13.5px] font-medium text-strong">Both</div>
            <Body className="mb-[9px] text-[12px]">Print in one colour without losing meaning — that is why status is a word and charts have no fills that matter.</Body>
            <Body className="text-[12px]">Anything shared outside the company is dated on its face. An undated deck is quoted back to you in six months as current.</Body>
          </div>
        </div>
      </Row>
    </Panel>
  );
}

const ASSETS: { file: string; format: string; built: boolean; use: string; scope: "house" | "gateway" }[] = [
  { file: "brand/tokens.json", format: "JSON", built: true, use: "Source of truth for the design tokens", scope: "house" },
  { file: "ss_logo_primary_green.svg", format: "SVG + PNG 2×", built: false, use: "Simpl Solutions parent mark — sign-off outstanding", scope: "house" },
  { file: "ss_deck_template.html", format: "HTML → PDF/PPTX", built: false, use: "Six layouts from Deck and document", scope: "house" },
  { file: "sg_logo_primary_green.svg", format: "SVG + PNG 2×", built: false, use: "Site, decks, documents", scope: "gateway" },
  { file: "sg_logo_primary_bone.svg", format: "SVG + PNG 2×", built: false, use: "Reversed on ink", scope: "gateway" },
  { file: "sg_mark_only.svg", format: "SVG", built: false, use: "Avatar, app icon", scope: "gateway" },
  { file: "sg_favicon_32.png · _180.png", format: "PNG + ICO", built: false, use: "Browser, iOS home screen", scope: "gateway" },
  { file: "sg_og_default.png", format: "PNG 1200×630", built: false, use: "Social fallback card", scope: "gateway" },
];

export function AssetKit({ scope = "house" }: { scope?: "house" | "gateway" }) {
  const rows = ASSETS.filter((a) => a.scope === scope);
  const id = scope === "house" ? "asset-kit" : "gateway-assets";
  const th = "border-b pb-[9px] font-mono text-[10px] tracking-[0.06em] text-label uppercase";
  return (
    <Panel id={id}>
      <Row label={`${n(id)} — ${scope === "house" ? "Asset kit" : "Gateway asset kit"}`}>
        <Note className="mb-[22px]">
          {scope === "house" ? (
            <>
              <strong className="font-medium">Only the token file exists.</strong> Every mark in this guide is drawn
              in code. The logo and template rows are the manifest to produce once the marks are signed off.
            </>
          ) : (
            <>
              <strong className="font-medium">Nothing in this kit exists yet.</strong> Every Gateway mark here is
              drawn in code. This is the manifest to produce once the mark is signed off.
            </>
          )}
        </Note>
        <div className="mb-[22px] overflow-x-auto">
          <div className="grid min-w-[560px] grid-cols-[1.6fr_1.2fr_1fr_1.5fr] text-[12.5px]">
            {["File", "Format", "State", "Use"].map((h) => (
              <div key={h} className={th}>
                {h}
              </div>
            ))}
            {rows.map((a, i) => {
              const c = cn("py-2.5", i < rows.length - 1 && "border-b");
              return (
                <div key={a.file} className="contents">
                  <div className={cn(c, "font-mono text-[11.5px] text-foreground")}>{a.file}</div>
                  <div className={cn(c, "text-muted-foreground")}>{a.format}</div>
                  <div className={cn(c, "flex items-center gap-1.5 text-foreground")}>
                    <span aria-hidden className={cn("size-1.5 rounded-full", a.built ? "bg-healthy" : "bg-unbuilt")} />
                    {a.built ? "Built" : "Not built"}
                  </div>
                  <div className={cn(c, "text-muted-foreground")}>{a.use}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          <InfoCard title="Naming">
            <Mono>[product]_[type]_[variant]_[ground].[ext]</Mono> — <Mono>ss_</Mono> for Simpl Solutions,{" "}
            <Mono>sg_</Mono> for Simpl Gateway. Lowercase, underscores, no spaces, no version numbers.
          </InfoCard>
          <InfoCard title="SVG is the master">
            Outlined paths, no embedded fonts, no clip paths, <Mono>currentColor</Mono> on the one-colour variant. PNGs
            are generated, never hand-exported twice.
          </InfoCard>
          <InfoCard title="One location">
            Assets live in the repo under <Mono>/brand</Mono> and are versioned with the code. A logo emailed as an
            attachment is not a source file.
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

export function Governance() {
  return (
    <Panel id="governance">
      <Row label={`${n("governance")} — Governance`}>
        <Lead className="mb-[22px]">
          This is the canonical brand system for Simpl Solutions and every product under it, adopted 8 September
          2026. Where any earlier styling, template or deployed page disagrees with it, this document wins and the
          other artefact is a defect to be fixed. That includes the earlier teal company systems (#14B8A6 with
          Montserrat and Lato; #30A8A8 with Geist and Source Serif 4).
        </Lead>
        <div className="mb-[22px] grid gap-5 md:grid-cols-2">
          <div className="rounded-card bg-raised px-5 py-[18px]">
            <div className="mb-3 text-[12.5px] font-medium text-strong">Version</div>
            <div className="flex flex-col gap-[7px] text-[12px] text-foreground">
              <div className="flex justify-between border-b pb-[7px]">
                <span>v1.0 — adopted</span>
                <Mono className="text-muted-foreground">8 Sep 2026</Mono>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>v0.9 — 11 sections, unadopted draft</span>
                <Mono>Aug 2026</Mono>
              </div>
            </div>
            <Body className="mt-3 text-[12px]">
              Minor version for a clarification, major for anything that changes an existing rule. Colour, type and
              the mark cannot change in a minor version.
            </Body>
          </div>
          <div className="rounded-card bg-raised px-5 py-[18px]">
            <div className="mb-3 text-[12.5px] font-medium text-strong">Decisions still open</div>
            <div className="flex flex-col gap-[9px] text-[12px] leading-[1.5] text-foreground">
              {[
                "The Simpl Solutions parent mark — placeholder, no source files, sign-off outstanding.",
                "The Simpl Gateway mark — placeholder, no source files, sign-off outstanding.",
                "Whether Simpl Console adopts this palette wholesale or keeps a variant.",
                "Trademark filing — until one exists, no ™ and no ®.",
              ].map((d) => (
                <div key={d} className="flex gap-[9px]">
                  <span aria-hidden className="mt-[5px] size-1.5 flex-none rounded-full bg-degraded" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          <InfoCard title="Who decides">
            Brand and design owns this document. Palette, type and logo changes need the owner&rsquo;s sign-off;
            anything else can be proposed by anyone shipping against it.
          </InfoCard>
          <InfoCard title="How to change it">
            File a request through the project tracker so it lands as an action item with a named owner. A brand
            decision agreed in a thread and not written here did not happen.
          </InfoCard>
          <InfoCard title="Review">
            Read at each release and revised on the spot when a real screen contradicts it. A guide that is right in
            theory and wrong on production is worse than no guide.
          </InfoCard>
        </div>
      </Row>
    </Panel>
  );
}

export function CheatSheet() {
  const head = "mb-[11px] font-mono text-[10px] tracking-[0.08em] text-label uppercase";
  return (
    <div className="w-full max-w-[1240px] rounded-page dark:border">
    <Specimen>
      <Panel id="cheat-sheet" tone="ink" pageBreak className="flex flex-col gap-[26px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow className="mb-[11px]">One page</Eyebrow>
            <h2 className="m-0 font-display text-[32px] leading-[1.1] font-light">Cheat sheet</h2>
          </div>
          <div className="font-mono text-[10.5px] leading-[1.9] text-comment md:text-right">
            <div>Simpl Solutions brand v1.0</div>
            <div>8 Sep 2026</div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className={head}>Colour</div>
            <div className="flex flex-col gap-[7px] font-mono text-[11px] text-on-ink">
              {(["green", "terracotta", "bone", "sage", "ink"] as const).map((k) => (
                <div key={k} className="flex items-center gap-[9px]">
                  <span
                    className={cn("size-3.5 rounded-[4px]", (k === "green" || k === "ink") && "border border-on-ink-muted/30")}
                    style={{ background: hex(k) }}
                  />
                  {hex(k)} {k === "green" ? "green" : k}
                </div>
              ))}
            </div>
            <p className="mt-[11px] mb-0 text-[11.5px] leading-[1.55] text-on-ink-muted">One terracotta per view. Sage never carries a sentence.</p>
          </div>
          <div>
            <div className={head}>Type</div>
            <div className="flex flex-col gap-1.5 text-[11.5px] text-on-ink">
              <div>Newsreader 300/400 — headlines</div>
              <div>Geist 300/400/500 — everything</div>
              <div>Geist Mono — labels, code, numbers</div>
            </div>
            <div className="mt-[11px] font-mono text-[11px] leading-[1.85] text-on-ink-muted">
              <div>62 · 34 · 22 · 19 · 14.5 · 13.5 · 10.5</div>
              <div>Sentence case. British spelling.</div>
            </div>
          </div>
          <div>
            <div className={head}>Space and shape</div>
            <div className="font-mono text-[11px] leading-[1.85] text-on-ink">
              <div>{SPACE.join(" ")}</div>
              <div>
                r: {RADIUS.ctl} ctl · {RADIUS.card} card · {RADIUS.panel} panel · {RADIUS.page} page
              </div>
              <div>gutter 56 · target 44 · measure 34em</div>
              <div>
                {MOTION.fast} / {MOTION.enter} / {MOTION.panel}ms
              </div>
              <div>{MOTION.ease}</div>
            </div>
            <p className="mt-[11px] mb-0 text-[11.5px] leading-[1.55] text-on-ink-muted">Depth from tone, not shadow. Data updates instantly.</p>
          </div>
          <div>
            <div className={head}>Before you ship</div>
            <div className="flex flex-col gap-2 text-[11.5px] leading-[1.5] text-on-ink">
              {[
                "One terracotta accent, one display size",
                "Every status is a dot plus a word",
                "Body text ≥ 4.5:1, focus ring present",
                "No certification claim, no price",
                "Real figures with unit, window and n",
                "Gaps named, artefact dated",
              ].map((t) => (
                <div key={t} className="flex gap-2">
                  <span aria-hidden className="text-on-ink-accent">—</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </Specimen>
    </div>
  );
}

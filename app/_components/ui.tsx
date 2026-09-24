import { PALETTE, type PaletteKey } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("font-mono text-[10.5px] tracking-[0.08em] uppercase text-label", className)}>
      {children}
    </div>
  );
}

export function Panel({
  id,
  children,
  tone = "surface",
  pageBreak,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "surface" | "ink" | "canvas";
  pageBreak?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-panel=""
      data-break={pageBreak ? "" : undefined}
      className={cn(
        "w-full max-w-[1240px] scroll-mt-6 rounded-page px-6 py-10 md:px-14 md:py-[52px]",
        { surface: "bg-surface", ink: "bg-ink text-on-ink-strong", canvas: "bg-canvas" }[tone],
        className
      )}
    >
      {children}
    </section>
  );
}

export function Row({
  label,
  children,
  className,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 lg:flex-row lg:gap-14", className)}>
      <div className="lg:w-[180px] lg:flex-none">
        <Eyebrow>{label}</Eyebrow>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function Rule() {
  return <div className="h-px bg-border" />;
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mb-6 max-w-[38em] text-[15px] leading-[1.65] text-muted-foreground", className)}>{children}</p>;
}

export function Body({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("m-0 text-[12.5px] leading-[1.55] text-muted-foreground", className)}>{children}</p>;
}

export function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-2 font-mono text-[10.5px] text-label", className)}>{children}</div>;
}

export function Mono({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("font-mono", className)}>{children}</span>;
}

export function InfoCard({
  title,
  eyebrow,
  children,
  className,
}: {
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-card bg-raised px-[19px] py-[17px]", className)}>
      {eyebrow && <Eyebrow className="mb-[9px]">{eyebrow}</Eyebrow>}
      {title && <div className="mb-1.5 text-[12.5px] font-medium text-strong">{title}</div>}
      <div className="text-[12px] leading-[1.55] text-muted-foreground [&_p]:m-0">{children}</div>
    </div>
  );
}

// A caution line — used where the guide states something is owed, not available.
export function Note({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex max-w-[44em] items-start gap-[11px] rounded-[10px] bg-degraded/15 px-4 py-[13px]", className)}>
      <span aria-hidden className="mt-1.5 size-1.5 flex-none rounded-full bg-degraded" />
      <div className="text-[12.5px] leading-[1.55] text-foreground">{children}</div>
    </div>
  );
}

// Pins a specimen to a mode, so "on bone" stays on bone when the page is dark.
export function Specimen({
  theme = "light",
  className,
  children,
}: {
  theme?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-theme={theme} className={className}>
      {children}
    </div>
  );
}

export function hex(key: PaletteKey) {
  return PALETTE[key].hex;
}

export function Swatch({
  colour,
  name,
  height = 52,
  outlined,
  dark,
}: {
  colour: PaletteKey;
  name?: string;
  height?: number;
  outlined?: boolean;
  dark?: boolean;
}) {
  return (
    <div>
      <div
        className={cn("mb-2 rounded-[9px]", outlined && "border")}
        style={{ height, background: hex(colour) }}
      />
      <div className={cn("text-[12px]", dark ? "text-on-ink" : "text-strong")}>{name ?? PALETTE[colour].name}</div>
      <div className="font-mono text-[10px] text-label">{hex(colour)}</div>
    </div>
  );
}

export function CodeBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <pre
      className={cn(
        "m-0 min-w-0 overflow-x-auto rounded-card bg-ink px-5 py-[18px] font-mono text-[11.5px] leading-[1.85] whitespace-pre text-on-ink",
        className
      )}
    >
      {children}
    </pre>
  );
}

export const Cm = ({ children }: { children: React.ReactNode }) => <span className="text-comment">{children}</span>;
export const Lit = ({ children }: { children: React.ReactNode }) => <span className="text-on-ink-accent">{children}</span>;

// Hatched block with a mono caption — §13's rule for labelled placeholders.
export function Hatched({ label, className }: { label?: string; className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center rounded-card", className)}
      style={{
        background:
          "repeating-linear-gradient(135deg, var(--sg-surface-raised) 0 7px, var(--sg-border) 7px 14px)",
      }}
    >
      {label && (
        <span className="rounded-[5px] bg-surface px-2.5 py-[5px] font-mono text-[11px] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

function luminance(h: string) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Ratios on this page are computed from the tokens, not transcribed.
export function contrast(fg: PaletteKey, bg: PaletteKey) {
  const a = luminance(hex(fg));
  const b = luminance(hex(bg));
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

export function ratio(fg: PaletteKey, bg: PaletteKey) {
  return `${contrast(fg, bg).toFixed(1)}:1`;
}

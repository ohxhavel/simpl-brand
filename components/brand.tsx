import type { Status } from "@/lib/brand";
import { cn } from "@/lib/utils";

type Tone = "default" | "reversed" | "muted";

// Brand guide §03: the ring-and-dot mark is a placeholder with no source files,
// so it is drawn here rather than shipped as an asset.
export function BrandMark({
  size = 34,
  tone = "default",
  oneColour = false,
  className,
}: {
  size?: number;
  tone?: Tone;
  oneColour?: boolean;
  className?: string;
}) {
  const ringColour =
    tone === "reversed"
      ? "var(--sg-inverted-strong)"
      : tone === "muted"
        ? "var(--sg-text-label)"
        : "var(--sg-text-strong)";
  const dotColour = oneColour || tone === "muted" ? ringColour : "var(--sg-accent)";

  // Below 16px the ring drops and only the dot remains.
  if (size < 16) {
    return (
      <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden className={cn("shrink-0", className)}>
        <circle cx="5" cy="5" r="5" fill={dotColour} />
      </svg>
    );
  }

  const stroke = size >= 34 ? (size * 2.5) / 34 : size >= 24 ? 2 : 1.5;
  const dot = size >= 34 ? (size * 11) / 34 : size >= 24 ? size / 3 : size * 0.375;
  const c = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden className={cn("shrink-0", className)}>
      <circle cx={c} cy={c} r={c - stroke / 2} fill="none" stroke={ringColour} strokeWidth={stroke} />
      <circle cx={c} cy={c} r={dot / 2} fill={dotColour} />
    </svg>
  );
}

export function Wordmark({
  tone = "default",
  oneColour = false,
  className,
}: {
  tone?: Exclude<Tone, "muted">;
  oneColour?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display font-normal tracking-[-0.015em] whitespace-nowrap",
        tone === "reversed" ? "text-on-ink-strong" : "text-strong",
        className
      )}
    >
      Simpl <span className={oneColour ? undefined : "text-label"}>Gateway</span>
    </span>
  );
}

export function Lockup({
  markSize = 22,
  tone = "default",
  oneColour = false,
  className,
  wordmarkClassName,
}: {
  markSize?: number;
  tone?: Exclude<Tone, "muted">;
  oneColour?: boolean;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark size={markSize} tone={tone} oneColour={oneColour} />
      <Wordmark tone={tone} oneColour={oneColour} className={cn("text-[19px]", wordmarkClassName)} />
    </span>
  );
}

// Simpl Solutions parent mark — placeholder from guide §02, no source files.
export function ParentMark({
  size = 24,
  tone = "default",
  className,
}: {
  size?: number;
  tone?: Exclude<Tone, "muted">;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0", tone === "reversed" ? "bg-on-ink-strong" : "bg-strong", className)}
      style={{ width: size, height: size, borderRadius: size / 4 }}
    />
  );
}

export function ParentLockup({
  size = 22,
  tone = "default",
  className,
  wordmarkClassName,
}: {
  size?: number;
  tone?: Exclude<Tone, "muted">;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ParentMark size={size} tone={tone} />
      <span
        className={cn(
          "font-display text-[19px] font-normal tracking-[-0.015em] whitespace-nowrap",
          tone === "reversed" ? "text-on-ink-strong" : "text-strong",
          wordmarkClassName
        )}
      >
        Simpl Solutions
      </span>
    </span>
  );
}

const STATUS_STYLE: Record<Status, { dot: string; tint: string; label: string }> = {
  healthy: { dot: "bg-healthy", tint: "bg-healthy/12", label: "Healthy" },
  degraded: { dot: "bg-degraded", tint: "bg-degraded/15", label: "Degraded" },
  failed: { dot: "bg-failed", tint: "bg-failed/12", label: "Failed" },
  unbuilt: { dot: "bg-unbuilt", tint: "bg-unbuilt/15", label: "Not built" },
};

// §10: a status is always a dot plus a word — colour alone is not a state.
export function StatusPill({
  status,
  children,
  className,
}: {
  status: Status;
  children?: React.ReactNode;
  className?: string;
}) {
  const s = STATUS_STYLE[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] rounded-full px-[13px] py-[6px] text-[12.5px] leading-none text-foreground",
        s.tint,
        className
      )}
    >
      <span aria-hidden className={cn("size-1.5 shrink-0 rounded-full", s.dot)} />
      {children ?? s.label}
    </span>
  );
}

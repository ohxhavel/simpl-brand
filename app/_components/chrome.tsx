import { Eyebrow, Panel, Specimen } from "./ui";

export function Hero({
  lockup,
  title,
  lead,
  meta,
}: {
  lockup: React.ReactNode;
  title: string;
  lead: string;
  meta: string[];
}) {
  return (
    <div className="w-full max-w-[1240px] rounded-page dark:border">
    <Specimen>
      <Panel tone="ink" className="flex flex-col justify-between gap-10 md:flex-row md:items-end md:gap-14 md:p-14">
        <div>
          <div className="mb-[34px]">{lockup}</div>
          <h1 className="mb-[18px] font-display text-[44px] leading-[1.06] font-light tracking-[-0.02em] md:text-[54px]">
            {title}
          </h1>
          <p className="mb-[22px] max-w-[38em] text-[16px] leading-[1.6] font-light text-on-ink-muted">{lead}</p>
          <div className="flex flex-wrap gap-[9px]">
            <div className="flex items-center gap-[7px] rounded-full bg-strong px-3.5 py-1.5 text-[12.5px] text-on-ink">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              Canonical — supersedes all earlier styling
            </div>
            <div className="rounded-full bg-strong px-3.5 py-1.5 font-mono text-[11px] tracking-[0.04em] text-on-ink-muted">
              Adopted 8 Sep 2026
            </div>
          </div>
        </div>
        <div className="font-mono text-[11px] leading-[2.1] whitespace-nowrap text-comment md:text-right">
          {meta.map((m) => (
            <div key={m}>{m}</div>
          ))}
        </div>
      </Panel>
    </Specimen>
    </div>
  );
}

export function Contents({ sections }: { sections: readonly (readonly [string, string])[] }) {
  return (
    <Panel className="grid grid-cols-1 gap-x-7 gap-y-2.5 sm:grid-cols-2 md:grid-cols-4 md:py-11">
      <Eyebrow className="col-span-full mb-2">Contents</Eyebrow>
      {sections.map(([id, title], i) => (
        <a key={id} href={`#${id}`} className="text-[13.5px] text-strong no-underline hover:text-accent-text">
          {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;{title}
        </a>
      ))}
    </Panel>
  );
}

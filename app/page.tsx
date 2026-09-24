import type { Metadata } from "next";
import { ParentMark } from "@/components/brand";
import { Contents, Hero } from "./_components/chrome";
import { HOUSE_SECTIONS } from "./_components/sections";
import {
  Architecture,
  Colour,
  DarkMode,
  Layout,
  Tokens,
  Typography,
} from "./_components/sections-foundations";
import {
  Accessibility,
  AssetKit,
  CheatSheet,
  CoBranding,
  Components,
  Data,
  Deck,
  Governance,
  Imagery,
  Legal,
  Motion,
  UiStates,
  Voice,
} from "./_components/sections-application";

export const metadata: Metadata = {
  title: { absolute: "Brand guide · Simpl Solutions" },
  openGraph: { title: "Brand guide" },
};

export default function HousePage() {
  return (
    <>
      <Hero
        lockup={
          <div className="flex items-center gap-[13px]">
            <ParentMark size={32} tone="reversed" />
            <span className="font-display text-[32px] tracking-[-0.015em] text-on-ink-strong">Simpl Solutions</span>
          </div>
        }
        title="Brand guide"
        lead="Everything needed to build a page, a console screen, a document or a deck that looks like it came from the same company — for Simpl Solutions and every product under it. Where a rule has an exception, the exception is written down."
        meta={["v1.0 · Sep 2026", `${HOUSE_SECTIONS.length} sections`, "Owner: brand + design", "Simpl Solutions Ltd"]}
      />
      <Contents sections={HOUSE_SECTIONS} />
      <Architecture />
      <Colour />
      <DarkMode />
      <Typography />
      <Layout />
      <Tokens />
      <Components />
      <UiStates />
      <Data />
      <Imagery />
      <Motion />
      <Accessibility />
      <Voice />
      <Legal />
      <CoBranding />
      <Deck />
      <AssetKit scope="house" />
      <Governance />
      <CheatSheet />
    </>
  );
}

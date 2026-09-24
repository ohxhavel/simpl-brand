import type { Metadata } from "next";
import { BrandMark, Wordmark } from "@/components/brand";
import { Contents, Hero } from "../_components/chrome";
import { GATEWAY_SECTIONS } from "../_components/sections";
import { BrandIdea, Logo, Misuse } from "../_components/sections-foundations";
import { Applications, AssetKit, Social } from "../_components/sections-application";

export const metadata: Metadata = {
  title: "Simpl Gateway",
  openGraph: { title: "Simpl Gateway" },
};

export default function GatewayPage() {
  return (
    <>
      <Hero
        lockup={
          <div className="flex items-center gap-[13px]">
            <BrandMark size={34} tone="reversed" />
            <Wordmark tone="reversed" className="text-[32px]" />
          </div>
        }
        title="Simpl Gateway"
        lead="The product layer on top of the Simpl Solutions house system: positioning, mark, lockups and the surfaces the gateway ships on. Colour, type, tokens, components and voice live on the Simpl Solutions page and apply here unchanged."
        meta={["v1.0 · Sep 2026", `${GATEWAY_SECTIONS.length} sections`, "Product of Simpl Solutions", "Owner: brand + design"]}
      />
      <Contents sections={GATEWAY_SECTIONS} />
      <BrandIdea />
      <Logo />
      <Misuse />
      <Social />
      <Applications />
      <AssetKit scope="gateway" />
    </>
  );
}

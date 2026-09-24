export const HOUSE_SECTIONS = [
  ["architecture", "Brand architecture"],
  ["colour", "Colour"],
  ["dark-mode", "Dark mode"],
  ["typography", "Typography"],
  ["layout", "Layout and space"],
  ["tokens", "Design tokens"],
  ["components", "Components"],
  ["ui-states", "UI states"],
  ["data", "Data visualisation"],
  ["imagery", "Imagery and icons"],
  ["motion", "Motion"],
  ["accessibility", "Accessibility"],
  ["voice", "Voice and writing"],
  ["legal", "Naming and legal"],
  ["co-branding", "Co-branding"],
  ["deck", "Deck and document"],
  ["asset-kit", "Asset kit"],
  ["governance", "Governance"],
] as const;

export const GATEWAY_SECTIONS = [
  ["brand-idea", "Brand idea"],
  ["logo", "Logo and lockups"],
  ["misuse", "Misuse"],
  ["social", "Social and avatars"],
  ["applications", "Applications"],
  ["gateway-assets", "Gateway asset kit"],
] as const;

export type SectionId = (typeof HOUSE_SECTIONS)[number][0] | (typeof GATEWAY_SECTIONS)[number][0];

// Numbering restarts on each page.
export function n(id: SectionId) {
  const list: readonly (readonly [string, string])[] = HOUSE_SECTIONS.some(([s]) => s === id)
    ? HOUSE_SECTIONS
    : GATEWAY_SECTIONS;
  return String(list.findIndex(([s]) => s === id) + 1).padStart(2, "0");
}

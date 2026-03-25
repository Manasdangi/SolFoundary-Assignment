import type { IconKey } from "../../icons/iconSprite";

export type SummaryRowSegment =
  | { kind: "metric"; iconKey: IconKey; label: string }
  | { kind: "text"; label: string; muted?: boolean };

export type SummaryRow = {
  id: string;
  leadingIconKey?: IconKey;
  label: string;
  segments: SummaryRowSegment[];
};

export type AnalyzedSoFarData = {
  id: string;
  label: string;
  segments: SummaryRowSegment[];
};

export type OnboardingCardData = {
  title: string;
  subtitle?: string;
  subtitleLines?: readonly string[];
  analyzedSoFar?: AnalyzedSoFarData;
  insights: SummaryRow[];
  notes: string | null;
};

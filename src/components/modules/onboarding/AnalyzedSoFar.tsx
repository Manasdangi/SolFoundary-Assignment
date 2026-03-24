import { Row } from "./Row";
import type { SummaryRow, SummaryRowSegment } from "./type";

export type AnalyzedSoFarData = {
  id: string;
  label: string;
  segments: SummaryRowSegment[];
};

type AnalyzedSoFarProps = {
  data: AnalyzedSoFarData;
};

export function AnalyzedSoFar({ data }: AnalyzedSoFarProps) {
  const row: SummaryRow = {
    id: data.id,
    leadingIconKey: "sparkle",
    label: data.label,
    segments: data.segments,
  };

  return (
    <div className="w-full overflow-hidden rounded-b-[8px] border-b border-l border-r border-neutral-200">
      <Row row={row} />
    </div>
  );
}

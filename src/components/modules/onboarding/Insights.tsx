import { Row } from "./Row";
import type { SummaryRow } from "./type";

type InsightsProps = {
  insights: SummaryRow[];
};

export function Insights({ insights }: InsightsProps) {
  if (insights.length === 0) return null;

  return (
    <div className="flex w-full flex-col gap-2 pt-3 pb-0 mb-0">
      {insights.map((r) => (
        <div
          key={r.id}
          className="w-full rounded-xl border border-neutral-100 bg-white"
        >
          <Row row={r} />
        </div>
      ))}
    </div>
  );
}

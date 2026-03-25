import type { SummaryRow } from "../type";
import { ICON_SPRITE } from "../../../icons/iconSprite";
import { Segment } from "./Segment";

type RowProps = {
  row: SummaryRow;
};

export function Row({ row }: RowProps) {
  const LeadIcon = ICON_SPRITE[row.leadingIconKey ?? "sparkle"];
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 last:border-b-0">
      <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
        <LeadIcon className="h-4 w-4 shrink-0 text-sky-500" aria-hidden />
        <span>{row.label}</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {row.segments.map((seg, i) => (
          <Segment key={`${row.id}-${i}`} segment={seg} />
        ))}
      </div>
    </div>
  );
}

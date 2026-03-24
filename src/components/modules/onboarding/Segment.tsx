import type { SummaryRowSegment } from "./type";
import { ICON_SPRITE } from "../../icons/iconSprite";

type SegmentProps = {
  segment: SummaryRowSegment;
};

export function Segment({ segment }: SegmentProps) {
  if (segment.kind === "text") {
    return (
      <span
        className={`text-sm ${segment.muted ? "text-neutral-400" : "text-neutral-600"}`}
      >
        {segment.label}
      </span>
    );
  }
  const Icon = ICON_SPRITE[segment.iconKey];
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-neutral-600">
      <Icon className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden />
      {segment.label}
    </span>
  );
}

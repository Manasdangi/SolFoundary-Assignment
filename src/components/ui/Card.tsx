import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /**
   * Extra Tailwind classes. Use for width/height, e.g. `!max-w-[640px] min-h-[341px]`.
   * To override the default white background, use the important modifier: `!bg-stone-50`,
   * or set `style={{ backgroundColor: '...' }}` instead.
   */
  className?: string;
  /** Replaces default inner padding (`px-8 pb-8 pt-7`) when set — use for split body/footer layouts. */
  contentClassName?: string;
  /** Inline styles (e.g. `{ width: 579, minHeight: 341, backgroundColor: '#fff' }`). */
  style?: CSSProperties;
  /** Diagonal hatch in the top-right corner (onboarding art). */
  showCornerHatch?: boolean;
};

export function Card({
  children,
  className = "",
  contentClassName,
  style,
  showCornerHatch = true,
}: CardProps) {
  const inner = contentClassName ?? "px-8 pb-8 pt-7";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] ${className}`}
      style={style}
    >
      {showCornerHatch ? (
        <div className="card-corner-hatch" aria-hidden />
      ) : null}
      <div className={`relative z-10 ${inner}`}>{children}</div>
    </div>
  );
}

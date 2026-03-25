import type { AnimationEvent } from "react";
import { SolIcon } from "../../../icons/SolIcon";

const titleCls =
  "font-display text-[32px] font-medium leading-snug tracking-tight text-neutral-900";

const subtitleCls =
  "mt-3 max-w-[440px] space-y-1 text-[13px] leading-relaxed text-[#666666]";

type CardContentProps = {
  title: string;
  subtitle: string[];
  textExiting: boolean;
  /** Bumps on each transition so stagger can replay for new copy. */
  step: number;
  onTextExitComplete?: () => void;
  onTextEnterComplete?: () => void;
};

/** Top section of onboarding card: logo + animated heading. */
export function CardContent({
  title,
  subtitle,
  textExiting,
  step,
  onTextExitComplete,
  onTextEnterComplete,
}: CardContentProps) {
  const onHeadingExitEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (!textExiting) return;
    if (e.animationName !== "fade-out") return;
    onTextExitComplete?.();
  };

  const onLineRevealAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (textExiting) return;
    if (e.animationName !== "fade-in") return;
    onTextEnterComplete?.();
  };

  const TextContent = textExiting ? (
    <div
      className="flex w-full max-w-[60%] flex-col items-center text-fade-out"
      onAnimationEnd={onHeadingExitEnd}
    >
      <h1 className={titleCls}>{title}</h1>
      {subtitle.length > 0 && (
        <div className={subtitleCls}>
          {subtitle.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div
      key={step}
      className="flex w-full max-w-[60%] flex-col items-center"
    >
      <h1
        className={`stagger-reveal-1 ${titleCls}`}
        onAnimationEnd={
          subtitle.length === 0 ? onLineRevealAnimationEnd : undefined
        }
      >
        {title}
      </h1>
      {subtitle.length > 0 && (
        <div
          className={`stagger-reveal-2 ${subtitleCls}`}
          onAnimationEnd={onLineRevealAnimationEnd}
        >
          {subtitle.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-8 text-center">
      <div className="flex w-full max-w-full flex-col items-center pt-12">
        <SolIcon width={80} height={80} className="shrink-0" />
        {TextContent}
      </div>
    </div>
  );
}

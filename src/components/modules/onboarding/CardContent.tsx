import type { AnimationEvent } from "react";
import { SolIcon } from "../../icons/SolIcon";

const titleCls =
  "font-display text-[1.45rem] font-medium leading-snug tracking-tight text-neutral-900 sm:text-[1.55rem]";

const subtitleCls =
  "mt-3 max-w-[440px] space-y-1 text-[15px] leading-relaxed text-neutral-500";

type CardContentProps = {
  title: string;
  subtitle: string[];
  textExiting: boolean;
  /** Bumps on each transition so stagger can replay for new copy. */
  headingEnterNonce: number;
  onTextExitComplete?: () => void;
  onTextEnterComplete?: () => void;
};

/** Top section of onboarding card: logo + animated heading. */
export function CardContent({
  title,
  subtitle,
  textExiting,
  headingEnterNonce,
  onTextExitComplete,
  onTextEnterComplete,
}: CardContentProps) {
  const onHeadingExitEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (!textExiting) return;
    if (e.animationName !== "onboarding-text-fade-out") return;
    onTextExitComplete?.();
  };

  const onLineRevealAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (textExiting) return;
    if (e.animationName !== "onboarding-line-reveal") return;
    onTextEnterComplete?.();
  };

  const TextContent = textExiting ? (
    <div
      className="flex w-full flex-col items-center animate-onboarding-text-out"
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
    <div key={headingEnterNonce} className="flex w-full flex-col items-center">
      <h1
        className={`onboarding-line-reveal-delay-2 ${titleCls}`}
        onAnimationEnd={
          subtitle.length === 0 ? onLineRevealAnimationEnd : undefined
        }
      >
        {title}
      </h1>
      {subtitle.length > 0 && (
        <div
          className={`onboarding-line-reveal-delay-3 ${subtitleCls}`}
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

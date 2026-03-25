import type { AnimationEvent } from "react";
import { useState } from "react";
import { EnterKeyIcon } from "../../icons/EnterKeyIcon";
import { Button } from "../../ui/Button";

const STEP_CTAS = ["Let's go", "Show me what you found", "Proceed"] as const;

type CtaFooterProps = {
  step: number;
  textExiting: boolean;
  show: boolean;
  onNext: () => void;
};

export function CtaFooter({ step, textExiting, show, onNext }: CtaFooterProps) {
  const [visible, setVisible] = useState(false);

  if (show && !visible) setVisible(true);

  if (!visible) return null;

  const fading = !show;

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fade-out") {
      setVisible(false);
    }
  };

  return (
    <footer className="flex shrink-0 justify-center px-4 pb-10 pt-2 sm:pb-12">
      <div
        key={`cta-${step}`}
        className={fading ? "text-fade-out" : "cta-fade-in"}
        onAnimationEnd={handleAnimationEnd}
      >
        <Button
          onClick={onNext}
          disabled={textExiting}
          aria-busy={textExiting}
          icon={<EnterKeyIcon className="shrink-0" />}
        >
          {STEP_CTAS[step]}
        </Button>
      </div>
    </footer>
  );
}

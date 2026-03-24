import { EnterKeyIcon } from "../../icons/EnterKeyIcon";
import { Button } from "../../ui/Button";

const STEP_CTAS = ["Let's go", "Show me what you found", "Proceed"] as const;

type CtaFooterProps = {
  step: number;
  textExiting: boolean;
  show: boolean;
  onNext: () => void;
};

export function CtaFooter({
  step,
  textExiting,
  show,
  onNext,
}: CtaFooterProps) {
  if (!show) return null;

  return (
    <footer className="flex shrink-0 justify-center px-4 pb-10 pt-2 sm:pb-12">
      <div key={`cta-${step}`} className="animate-onboarding-button">
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

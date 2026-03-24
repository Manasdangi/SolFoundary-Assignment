import { useCallback, useState } from "react";
import { OnboardingCard } from "./OnboardingCard";
import { CtaFooter } from "./CtaFooter";
import { getOnboardingCardData } from "../../../data/onboardingConfig";

const LAST_STEP = 2;

export function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [textExiting, setTextExiting] = useState(false);
  /** Bumps after each transition so heading block fades in (skipped on first paint). */
  const [enterNonce, setEnterNonce] = useState(0);
  const [ctaReady, setCtaReady] = useState(false);

  const goNext = useCallback(() => {
    if (!textExiting) {
      setCtaReady(false);
      setTextExiting(true);
    }
  }, [textExiting]);

  const onTextExitComplete = useCallback(() => {
    setStep((s) => (s >= LAST_STEP ? 0 : s + 1));
    setEnterNonce((n) => n + 1);
    setTextExiting(false);
  }, []);

  const cardData = getOnboardingCardData(step);

  return (
    <div className="flex min-h-dvh flex-col bg-[#f4f4f5] font-body text-neutral-900">
      <main className="flex flex-1 flex-col items-center px-4 pb-6 pt-[203px] sm:px-6 sm:pb-8">
        <OnboardingCard
          data={cardData}
          textExiting={textExiting}
          onTextEnterComplete={() => setCtaReady(true)}
          onTextExitComplete={onTextExitComplete}
          headingEnterNonce={enterNonce}
        />
      </main>

      <CtaFooter
        step={step}
        textExiting={textExiting}
        show={ctaReady}
        onNext={goNext}
      />
    </div>
  );
}

import { useCallback, useState } from "react";
import { OnboardingCard } from "./components/OnboardingCard";
import { CtaFooter } from "./components/CtaFooter";
import {
  getOnboardingCardData,
  TOTAL_STEPS,
} from "../../../data/onboardingConfig";

export function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [textExiting, setTextExiting] = useState(false);
  const [ctaReady, setCtaReady] = useState(false);

  const goNext = useCallback(() => {
    if (!textExiting) {
      setCtaReady(false);
      setTextExiting(true);
    }
  }, [textExiting]);

  const onTextExitComplete = useCallback(() => {
    setStep((s) => (s >= TOTAL_STEPS - 1 ? 0 : s + 1));
    setTextExiting(false);
  }, []);

  const cardData = getOnboardingCardData(step);

  return (
    <div className="flex min-h-dvh flex-col bg-[#f4f4f5] font-body text-neutral-900">
      <main className="flex flex-1 flex-col items-center px-4 pb-6 pt-[120px] sm:px-6 sm:pb-8">
        <OnboardingCard
          data={cardData}
          textExiting={textExiting}
          onTextEnterComplete={() => setCtaReady(true)}
          onTextExitComplete={onTextExitComplete}
          step={step}
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

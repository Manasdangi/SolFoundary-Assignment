import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Card } from "../../ui/Card";
import { CardContent } from "./CardContent";
import { Notes } from "./Notes";
import { AnalyzedSoFar } from "./AnalyzedSoFar";
import { Insights } from "./Insights";
import type { OnboardingCardData } from "./type";

type OnboardingCardProps = {
  data: OnboardingCardData;
  textExiting?: boolean;
  onTextExitComplete?: () => void;
  onTextEnterComplete?: () => void;
  headingEnterNonce?: number;
};

export function OnboardingCard({
  data,
  textExiting = false,
  onTextExitComplete,
  onTextEnterComplete,
  headingEnterNonce = 0,
}: OnboardingCardProps) {
  const { title, subtitle, subtitleLines, analyzedSoFar, insights, notes } =
    data;

  const lines = subtitleLines?.length
    ? [...subtitleLines]
    : subtitle
      ? [subtitle]
      : [];
  const hasNotes = notes != null;
  const hasLower = analyzedSoFar != null || insights.length > 0 || hasNotes;

  const [insightsRevealed, setInsightsRevealed] = useState(false);
  const lowerRevealRef = useRef<HTMLDivElement>(null);
  const onTextEnterCompleteRef = useRef(onTextEnterComplete);
  onTextEnterCompleteRef.current = onTextEnterComplete;

  const handleTextEnterComplete = useCallback(() => {
    setInsightsRevealed(true);
    if (!hasLower) {
      onTextEnterCompleteRef.current?.();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onTextEnterCompleteRef.current?.();
    }
  }, [hasLower]);

  useEffect(() => {
    if (!insightsRevealed || !hasLower) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = lowerRevealRef.current;
    const notify = () => onTextEnterCompleteRef.current?.();

    if (!el) {
      notify();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      notify();
    };

    const onEnd = (e: TransitionEvent) => {
      if (e.target !== el) return;
      if (e.propertyName !== "grid-template-rows") return;
      el.removeEventListener("transitionend", onEnd);
      finish();
    };

    el.addEventListener("transitionend", onEnd);
    const timeoutId = window.setTimeout(finish, 1200);

    return () => {
      el.removeEventListener("transitionend", onEnd);
      window.clearTimeout(timeoutId);
    };
  }, [insightsRevealed, hasLower]);

  useLayoutEffect(() => {
    setInsightsRevealed(false);
  }, [headingEnterNonce]);

  useLayoutEffect(() => {
    if (textExiting) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = requestAnimationFrame(() => handleTextEnterComplete());
    return () => cancelAnimationFrame(id);
  }, [
    textExiting,
    headingEnterNonce,
    title,
    lines.join("\n"),
    handleTextEnterComplete,
  ]);

  return (
    <div className="w-[600px] max-w-full">
      <Card
        className="w-full max-w-none overflow-hidden"
        contentClassName="flex flex-col p-0"
        style={{
          minHeight: 300,
          height: "auto",
        }}
      >
        <div className="flex min-h-[300px] shrink-0 flex-col text-center">
          <CardContent
            title={title}
            subtitle={lines}
            textExiting={textExiting}
            headingEnterNonce={headingEnterNonce}
            onTextExitComplete={onTextExitComplete}
            onTextEnterComplete={handleTextEnterComplete}
          />
        </div>
      </Card>
      {hasLower && (
        <div
          ref={lowerRevealRef}
          className="grid w-full onboarding-lower-reveal"
          style={{ gridTemplateRows: insightsRevealed ? "1fr" : "0fr" }}
        >
          <div
            className={`min-h-0 overflow-hidden transition-opacity duration-300 ${insightsRevealed ? "opacity-100" : "opacity-0"} ${textExiting ? "animate-onboarding-text-out" : ""}`}
          >
            {analyzedSoFar && <AnalyzedSoFar data={analyzedSoFar} />}
            <Insights insights={insights} />
            {hasNotes && <Notes notes={notes} />}
          </div>
        </div>
      )}
    </div>
  );
}

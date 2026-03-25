import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Card } from "../../../ui/Card";
import { CardContent } from "./CardContent";
import { Notes } from "./Notes";
import { AnalyzedSoFar } from "./AnalyzedSoFar";
import { Insights } from "./Insights";
import type { OnboardingCardData } from "../type";

type OnboardingCardProps = {
  data: OnboardingCardData;
  textExiting?: boolean;
  onTextExitComplete?: () => void;
  onTextEnterComplete?: () => void;
  transitionKey?: number;
};

export function OnboardingCard({
  data,
  textExiting = false,
  onTextExitComplete,
  onTextEnterComplete,
  transitionKey = 0,
}: OnboardingCardProps) {
  const { title, subtitle, analyzedSoFar, insights, notes } = data;
  const hasNotes = notes != null;
  const hasLower = analyzedSoFar != null || insights.length > 0 || hasNotes;

  const [insightsRevealed, setInsightsRevealed] = useState(false);
  const [lowerHeight, setLowerHeight] = useState(0);

  // Refs for the lower section. These are used to animate the lower section.
  const lowerRevealRef = useRef<HTMLDivElement>(null);
  const lowerContentRef = useRef<HTMLDivElement>(null);

  // Ref for the previous transition key. This is used to check if the transition key has changed.
  const prevNonceRef = useRef(transitionKey);

  const onTextEnterCompleteRef = useRef(onTextEnterComplete);
  onTextEnterCompleteRef.current = onTextEnterComplete;

  if (prevNonceRef.current !== transitionKey) {
    prevNonceRef.current = transitionKey;
    if (insightsRevealed) setInsightsRevealed(false);
    if (lowerHeight !== 0) setLowerHeight(0);
  }

  // Handles the text entering the card.
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

  // After insights are revealed, wait for the margin-top transition on the lower panel to finish, then notify parent.
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
      if (e.propertyName !== "margin-top") return;
      el.removeEventListener("transitionend", onEnd);
      finish();
    };

    el.addEventListener("transitionend", onEnd);
    const timeoutId = window.setTimeout(finish, 900);

    return () => {
      el.removeEventListener("transitionend", onEnd);
      window.clearTimeout(timeoutId);
    };
  }, [insightsRevealed, hasLower]);

  // Capture the natural height of the lower section so we can animate its reveal via negative margin-top.
  useLayoutEffect(() => {
    const el = lowerContentRef.current;
    if (el) setLowerHeight(el.scrollHeight);
  }, [data]);

  // When reduced-motion is active, skip CSS transitions and fire the enter-complete callback immediately.
  useLayoutEffect(() => {
    if (textExiting) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = requestAnimationFrame(() => handleTextEnterComplete());
    return () => cancelAnimationFrame(id);
  }, [
    textExiting,
    transitionKey,
    title,
    subtitle.join("\n"),
    handleTextEnterComplete,
  ]);

  /* ── Render ─────────────────────────────────────────────── */

  return (
    <div className="w-[600px] max-w-full">
      {/* Card */}
      <Card
        className="relative z-10 w-full max-w-none overflow-hidden"
        contentClassName="flex flex-col p-0"
        style={{ minHeight: 300, height: "auto" }}
      >
        <div className="flex min-h-[300px] shrink-0 flex-col text-center">
          <CardContent
            title={title}
            subtitle={subtitle}
            textExiting={textExiting}
            transitionKey={transitionKey}
            onTextExitComplete={onTextExitComplete}
            onTextEnterComplete={handleTextEnterComplete}
          />
        </div>
      </Card>
      {/* Lower section */}
      {hasLower && (
        <div
          ref={lowerRevealRef}
          className={`relative z-0 w-full ${insightsRevealed ? "insights-reveal" : ""} ${textExiting ? "text-fade-out" : ""}`}
          style={{
            marginTop:
              insightsRevealed && lowerHeight > 0
                ? -16
                : lowerHeight > 0
                  ? -(lowerHeight + 16)
                  : 0,
            opacity: insightsRevealed && lowerHeight > 0 ? 1 : 0,
          }}
        >
          <div ref={lowerContentRef}>
            {analyzedSoFar && <AnalyzedSoFar data={analyzedSoFar} />}
            <Insights insights={insights} />
            {hasNotes && <Notes notes={notes} />}
          </div>
        </div>
      )}
    </div>
  );
}

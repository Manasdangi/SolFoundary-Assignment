/**
 * Step-specific layout + copy for `OnboardingCard`.
 * Swap this module for API-driven data later.
 */

import type { OnboardingCardData } from "../components/modules/onboarding/type";

export const step1OnboardingCardData: OnboardingCardData = {
  title: "Welcome, Manas",
  subtitle: "Your personal AI, custom-trained. Time to start sharing here.",
  insights: [],
  notes: null,
  headerLineReveal: true,
};

export const step2OnboardingCardData: OnboardingCardData = {
  title: "Here's what I've covered.",
  subtitleLines: [
    "This is across the last 28 days.",
    "Going through older conversations as we speak",
  ],
  analyzedSoFar: {
    id: "analyzed",
    label: "Analyzed so far",
    segments: [
      { kind: "metric", iconKey: "chat", label: "600 messages" },
      { kind: "metric", iconKey: "message", label: "88 threads" },
      { kind: "metric", iconKey: "hash", label: "25 channels" },
    ],
  },
  insights: [],
  headerLineReveal: true,
  notes: null,
};

export const step3OnboardingCardData: OnboardingCardData = {
  title: "Across your Slack, here's what we found",
  subtitle: "Sol will continue to find older & newer items over time",
  headerLineReveal: true,
  insights: [
    {
      id: "collaborating",
      leadingIconKey: "sparkle",
      label: "You are collaborating with",
      segments: [
        { kind: "metric", iconKey: "users", label: "14 people" },
        { kind: "text", label: "across", muted: true },
        { kind: "metric", iconKey: "folder", label: "8 topics" },
      ],
    },
    {
      id: "open-loops",
      leadingIconKey: "sparkle",
      label: "Open loops found",
      segments: [
        { kind: "metric", iconKey: "userCheck", label: "17 open on you" },
        { kind: "metric", iconKey: "users", label: "37 awaited on others" },
      ],
    },
  ],
  notes: "8 new this week, 7 have turned inactive & 4 are overdue",
};

export function getOnboardingCardData(step: number): OnboardingCardData {
  if (step === 0) return step1OnboardingCardData;
  if (step === 1) return step2OnboardingCardData;
  if (step === 2) return step3OnboardingCardData;
  throw new Error(`getOnboardingCardData: invalid step ${step}`);
}

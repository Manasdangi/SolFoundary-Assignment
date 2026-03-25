import type { OnboardingCardData } from "../components/modules/onboarding/type";

const ONBOARDING_STEPS: OnboardingCardData[] = [
  {
    title: "Welcome, Manas",
    subtitle: [
      "Your open loops are captured & organized.",
      "Time to start closing them.",
    ],
    insights: [],
    notes: null,
  },
  {
    title: "First, here’s what we sifted through so far...",
    subtitle: [
      "This is across the last 14 days.",
      "Open loops from earlier will be captured soon.",
    ],
    analyzedSoFar: {
      id: "analyzed",
      label: "Analyzed so far",
      segments: [
        { kind: "metric", iconKey: "message", label: "600 messages" },
        { kind: "metric", iconKey: "chat", label: "88 threads" },
        { kind: "metric", iconKey: "hash", label: "25 channels" },
      ],
    },
    insights: [],
    notes: null,
  },
  {
    title: "Across your Slack, here's what we found.",
    subtitle: ["Sol will continue to find older & newer items over time."],
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
          { kind: "metric", iconKey: "userIncoming", label: "17 open on you" },
          {
            kind: "metric",
            iconKey: "userOutgoing",
            label: "37 awaited on others",
          },
        ],
      },
    ],
    notes: "8 new this week, 7 have turned inactive & 4 are overdue",
  },
];

export const TOTAL_STEPS = ONBOARDING_STEPS.length;

export function getOnboardingCardData(step: number): OnboardingCardData {
  const data = ONBOARDING_STEPS[step];
  return data;
}

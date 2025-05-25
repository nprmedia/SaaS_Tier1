// content/pricing.ts

export interface Tier {
  title: string;
  highlight?: boolean;
  description: string;
  features: string[];
  cta: string;
}

export interface PricingGroup {
  category: string;
  headline?: string;
  tiers: Tier[];
}

export const pricingData: PricingGroup[] = [
  {
    category: "Web Development",
    headline: "From MVP to investor-ready — launch fast, scale smart.",
    tiers: [
      {
        title: "🔁 Smart Automation Engine",
        highlight: false,
        description: "Free your team from repeatable tasks",
        features: [
          "Automate 80% of your daily busywork—no code required",
          "Automates workflows across ops, support, and marketing",
          "Trigger-based logic that adapts in real-time",
          "Zero-code builder for fast deployment",
          "Cuts hours of manual work weekly",
        ],
        cta: "👉 See Automated Workflows in Action",
      },
      {
        title: "📊 Real-Time Insights Dashboard",
        highlight: true,
        description: "Data you can act on, not dig for",
        features: [
          "Turn raw data into decision-ready insights instantly",
          "Unified view of KPIs, trends, anomalies, and most importantly, results",
          "Instant alerts on what matters most",
          "Customizable dashboards by role or team",
          "Built-in recommendations based on usage",
        ],
        cta: "📈 Explore Your Custom Dashboard",
      },
      {
        title: "⚡️ One-Click Integrations",
        highlight: false,
        description: "Your stack, fully connected in minutes",
        features: [
          "Connect your entire toolstack in under 5 minutes",
          "Prebuilt connectors for 100+ tools (Slack, HubSpot, Zapier, etc.)",
          "No dev work or API setup required",
          "Syncs data both ways—no silos",
          "Setup takes under 5 minutes",
        ],
        cta: "🔗 Browse Available Integrations",
      },
    ],
  },
];

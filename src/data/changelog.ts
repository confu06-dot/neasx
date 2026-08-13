export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "new" | "improved" | "fixed";
    items: string[];
  }[];
  products: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    id: "v1-2-0",
    version: "1.2.0",
    date: "2026-08-10",
    title: "Multi-language Support & Enhanced Analytics",
    description:
      "Major update bringing internationalization support and advanced analytics across all products.",
    changes: [
      {
        type: "new",
        items: [
          "11 language support: English, Turkish, Spanish, French, German, Portuguese, Russian, Japanese, Korean, Chinese, Arabic",
          "Advanced usage analytics dashboard",
          "Real-time collaboration in Chat workspaces",
          "API webhook support for all products",
        ],
      },
      {
        type: "improved",
        items: [
          "Writer: 50% faster generation speed",
          "Agent: Better task breakdown and execution",
          "Chat: Enhanced file processing capabilities",
          "Overall UI/UX improvements across platform",
        ],
      },
      {
        type: "fixed",
        items: [
          "Resolved authentication issues in Safari",
          "Fixed credit calculation edge cases",
          "Improved error handling in API responses",
        ],
      },
    ],
    products: ["Platform", "Writer", "Chat", "Agent", "API"],
  },
  {
    id: "v1-1-5",
    version: "1.1.5",
    date: "2026-07-28",
    title: "Agent Workflows & Team Features",
    description:
      "Introducing advanced workflow automation and team collaboration features.",
    changes: [
      {
        type: "new",
        items: [
          "Agent: Custom workflow builder",
          "Team workspaces with role-based permissions",
          "Shared templates library",
          "Usage reports for team admins",
        ],
      },
      {
        type: "improved",
        items: [
          "Agent: More reliable task execution",
          "Chat: Better context retention",
          "Faster page load times",
        ],
      },
    ],
    products: ["Agent", "Platform"],
  },
  {
    id: "v1-1-0",
    version: "1.1.0",
    date: "2026-07-15",
    title: "NEASX API Launch",
    description:
      "Developer platform goes live with comprehensive API access.",
    changes: [
      {
        type: "new",
        items: [
          "Public API access for all products",
          "SDKs for JavaScript, Python, and Go",
          "Interactive API documentation",
          "API key management dashboard",
          "Usage tracking and rate limiting",
        ],
      },
      {
        type: "improved",
        items: [
          "Writer: Better markdown formatting",
          "Chat: File upload size increased to 100MB",
        ],
      },
    ],
    products: ["API", "Writer", "Chat"],
  },
  {
    id: "v1-0-5",
    version: "1.0.5",
    date: "2026-07-01",
    title: "Performance & Stability",
    description: "Focused on performance improvements and bug fixes.",
    changes: [
      {
        type: "improved",
        items: [
          "40% faster response times across all products",
          "Better error messages and user feedback",
          "Optimized credit consumption",
        ],
      },
      {
        type: "fixed",
        items: [
          "Fixed intermittent connection issues",
          "Resolved billing sync delays",
          "Fixed various UI inconsistencies",
        ],
      },
    ],
    products: ["Platform"],
  },
  {
    id: "v1-0-0",
    version: "1.0.0",
    date: "2026-06-15",
    title: "NEASX Platform Launch",
    description:
      "Official launch of the NEASX AI ecosystem with Writer, Chat, and Agent.",
    changes: [
      {
        type: "new",
        items: [
          "NEASX Writer: AI writing workspace",
          "NEASX Chat: Intelligent AI assistant",
          "NEASX Agent: Autonomous task automation",
          "Unified authentication and billing",
          "Free, Starter, Pro, Business, and Enterprise plans",
        ],
      },
    ],
    products: ["Writer", "Chat", "Agent", "Platform"],
  },
];

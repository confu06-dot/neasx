import {
  PenLine,
  MessageSquare,
  Bot,
  Palette,
  AudioLines,
  ScanEye,
  Code2,
} from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: "AVAILABLE" | "COMING SOON";
  icon: any;
  gradient: string;
}

export const products: Product[] = [
  {
    slug: "writer",
    name: "NEASX Writer",
    tagline: "AI writing workspace",
    description:
      "Write, rewrite, summarize, research and translate — all in a single intelligent workspace.",
    features: ["Write", "Rewrite", "Summarize", "Research", "Translate"],
    status: "AVAILABLE",
    icon: PenLine,
    gradient: "from-blue-500 to-violet-500",
  },
  {
    slug: "chat",
    name: "NEASX Chat",
    tagline: "Intelligent AI workspace",
    description:
      "Chat with AI, upload files, perform research and collaborate with your team in one place.",
    features: ["Chat", "Files", "Research", "Knowledge", "Teams"],
    status: "AVAILABLE",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    slug: "agent",
    name: "NEASX Agent",
    tagline: "AI that gets work done",
    description:
      "Deploy AI agents that research, automate, process data and execute tasks end-to-end.",
    features: ["Research", "Automation", "Data processing", "Task execution", "Workflows"],
    status: "AVAILABLE",
    icon: Bot,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "studio",
    name: "NEASX Studio",
    tagline: "Creative AI suite",
    description:
      "Generate images, video, design assets and creative content powered by advanced AI models.",
    features: ["Images", "Video", "Design", "Creative generation"],
    status: "COMING SOON",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    slug: "voice",
    name: "NEASX Voice",
    tagline: "Voice intelligence",
    description:
      "Turn text into natural speech, generate voices and process audio at scale.",
    features: ["Text → Speech", "Voice generation", "Voice processing"],
    status: "COMING SOON",
    icon: AudioLines,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    slug: "vision",
    name: "NEASX Vision",
    tagline: "Visual intelligence",
    description:
      "Analyze images, extract data from documents and build computer vision into your workflow.",
    features: ["Image analysis", "Document analysis", "OCR", "Computer vision"],
    status: "COMING SOON",
    icon: ScanEye,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    slug: "api",
    name: "NEASX API",
    tagline: "Developer platform",
    description:
      "Build AI into your products with APIs, SDKs, authentication, usage tracking and documentation.",
    features: ["AI APIs", "SDKs", "Authentication", "Usage", "Credits"],
    status: "AVAILABLE",
    icon: Code2,
    gradient: "from-slate-400 to-slate-600",
  },
];
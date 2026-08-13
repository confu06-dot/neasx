export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Product Designer",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "NEASX Writer has completely transformed my workflow. I can now draft design docs, user stories and research summaries in minutes instead of hours.",
    rating: 5,
    product: "Writer",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "As a startup founder, I wear many hats. NEASX Agent helps me automate market research, competitor analysis and data processing. It's like having an extra team member.",
    rating: 5,
    product: "Agent",
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Content Manager",
    company: "HubSpot",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "The ecosystem approach is genius. I use Writer for blog posts, Chat for research, and Agent for social media scheduling. One account, infinite possibilities.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Engineering Lead",
    company: "Notion",
    avatar: "https://i.pravatar.cc/150?img=14",
    content:
      "NEASX API makes it incredibly easy to add AI capabilities to our product. The documentation is excellent and the SDKs are well-designed.",
    rating: 5,
    product: "API",
  },
  {
    id: "5",
    name: "Lisa Zhang",
    role: "Marketing Director",
    company: "Shopify",
    avatar: "https://i.pravatar.cc/150?img=9",
    content:
      "We've integrated NEASX into our marketing workflow. The speed and quality of output is remarkable. Our team productivity has increased by 40%.",
    rating: 5,
  },
  {
    id: "6",
    name: "Ahmed Hassan",
    role: "Freelance Writer",
    company: "Self-Employed",
    avatar: "https://i.pravatar.cc/150?img=33",
    content:
      "As a freelancer, NEASX has been a game-changer. I can take on more clients and deliver better work faster. The free plan is generous enough to get started.",
    rating: 5,
    product: "Writer",
  },
  {
    id: "7",
    name: "Rachel Moore",
    role: "Data Analyst",
    company: "Netflix",
    avatar: "https://i.pravatar.cc/150?img=20",
    content:
      "NEASX Chat with file upload capability is perfect for analyzing datasets. I can ask questions about our data and get insights in seconds.",
    rating: 5,
    product: "Chat",
  },
  {
    id: "8",
    name: "James Wilson",
    role: "CTO",
    company: "Vercel",
    avatar: "https://i.pravatar.cc/150?img=52",
    content:
      "The enterprise plan gives us everything we need: SSO, custom models, and dedicated support. NEASX understands what businesses actually need.",
    rating: 5,
  },
];

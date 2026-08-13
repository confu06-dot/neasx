import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { products } from "@/data/products";
import { ToolHeader } from "@/components/workspace/shared";
import ChatTool from "@/components/workspace/ChatTool";
import WriterTool from "@/components/workspace/WriterTool";
import AgentTool from "@/components/workspace/AgentTool";
import ApiTool from "@/components/workspace/ApiTool";
import ComingSoonTool from "@/components/workspace/ComingSoonTool";

// Only serializable fields can cross the Server → Client boundary.
// `Product.icon` is a React component (a function), so we hand the client
// tool components a plain object with plain strings instead of the full
// product record.
export interface ToolProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Workspace not found" };
  return {
    title: `${product.name} — NEASX Workspace`,
    description: product.tagline,
  };
}

export default async function WorkspaceToolPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const toolProduct: ToolProduct = {
    slug: product.slug,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    gradient: product.gradient,
  };

  let tool: ReactNode;
  switch (slug) {
    case "chat":
      tool = <ChatTool product={toolProduct} />;
      break;
    case "writer":
      tool = <WriterTool product={toolProduct} />;
      break;
    case "agent":
      tool = <AgentTool product={toolProduct} />;
      break;
    case "api":
      tool = <ApiTool product={toolProduct} />;
      break;
    default:
      tool = <ComingSoonTool product={toolProduct} />;
  }

  return (
    <div className="space-y-6">
      <ToolHeader name={product.name} tagline={product.tagline} gradient={product.gradient} />
      {tool}
    </div>
  );
}

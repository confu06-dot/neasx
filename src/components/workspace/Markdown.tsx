"use client";

import { Fragment } from "react";

// Minimal Markdown renderer for AI responses.
// Supports: #/##/### headings, **bold**, *italic*, `inline code`,
// unordered (•, -) / ordered lists, ``` code blocks, blockquotes and HR.

function renderInline(text: string, key: number) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`)/g);
  return (
    <Fragment key={key}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={i} className="italic text-slate-300">
              {part.slice(1, -1)}
            </em>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={i}
              className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-cyan-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </Fragment>
  );
}

export default function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: Array<{ type: string; content: string }> = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.trimStart().startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push({ type: "code", content: buf.join("\n") });
      continue;
    }

    if (/^\s*-\s+/.test(line) || /^\s*•\s+/.test(line)) {
      const buf: string[] = [];
      while (
        i < lines.length &&
        (/^\s*[-•]\s+/.test(lines[i]) || lines[i].trim() === "")
      ) {
        if (lines[i].trim() !== "") {
          buf.push(lines[i].replace(/^\s*[-•]\s+/, ""));
        }
        i++;
      }
      blocks.push({ type: "ul", content: buf.join("\n") });
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", content: buf.join("\n") });
      continue;
    }

    if (/^#{1,3}\s/.test(line)) {
      const level = line.match(/^(#{1,3})/)?.[1].length ?? 1;
      blocks.push({ type: `h${level}`, content: line.replace(/^#{1,3}\s/, "") });
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      blocks.push({ type: "quote", content: line.replace(/^>\s?/, "") });
      i++;
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      blocks.push({ type: "hr", content: "" });
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    blocks.push({ type: "p", content: line });
    i++;
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h1":
            return (
              <h2 key={idx} className="text-xl font-black tracking-tight text-white">
                {renderInline(block.content, idx)}
              </h2>
            );
          case "h2":
            return (
              <h3 key={idx} className="text-base font-bold tracking-tight text-white">
                {renderInline(block.content, idx)}
              </h3>
            );
          case "h3":
            return (
              <h4 key={idx} className="text-sm font-bold text-slate-200">
                {renderInline(block.content, idx)}
              </h4>
            );
          case "ul": {
            const items = block.content.split("\n").filter(Boolean);
            return (
              <ul key={idx} className="space-y-1.5">
                {items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-6 text-slate-300">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    <span>{renderInline(item, j)}</span>
                  </li>
                ))}
              </ul>
            );
          }
          case "ol": {
            const items = block.content.split("\n").filter(Boolean);
            return (
              <ol key={idx} className="space-y-1.5">
                {items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-6 text-slate-300">
                    <span className="mt-0.5 shrink-0 text-xs font-bold text-blue-400">
                      {j + 1}.
                    </span>
                    <span>{renderInline(item, j)}</span>
                  </li>
                ))}
              </ol>
            );
          }
          case "code":
            return (
              <pre
                key={idx}
                className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-[13px] leading-6 text-cyan-200"
              >
                {block.content}
              </pre>
            );
          case "quote":
            return (
              <blockquote
                key={idx}
                className="border-l-2 border-blue-400/50 pl-4 text-sm italic text-slate-400"
              >
                {renderInline(block.content, idx)}
              </blockquote>
            );
          case "hr":
            return <hr key={idx} className="border-white/10" />;
          default:
            return (
              <p key={idx} className="text-sm leading-7 text-slate-300">
                {renderInline(block.content, idx)}
              </p>
            );
        }
      })}
    </div>
  );
}


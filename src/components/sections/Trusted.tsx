import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFastapi,
  SiPython,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType | typeof Sparkles;
  color: string;
}

const technologies: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "FastAPI", icon: SiFastapi, color: "text-emerald-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "OpenAI", icon: Sparkles, color: "text-emerald-400" },
];

export default function Trusted() {
  return (
    <Section className="relative py-8 sm:py-10">
      <Container>
        <div className="relative">
          {/* Başlık */}
          <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500">
            Modern teknolojilerle geliştirildi
          </p>

          {/* Teknoloji Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.05] hover:text-slate-200"
              >
                <Icon className={cn("h-4 w-4 shrink-0", color)} />
                <span className="truncate transition-colors duration-300 group-hover:text-blue-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
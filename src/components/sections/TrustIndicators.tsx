import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StatsCounter from "@/components/ui/StatsCounter";
import { Shield, Users, Zap, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Active users worldwide",
  },
  {
    icon: Zap,
    value: 2.5,
    suffix: "M+",
    label: "AI requests processed",
  },
  {
    icon: Globe,
    value: 150,
    suffix: "+",
    label: "Countries & regions",
  },
  {
    icon: Shield,
    value: 99.9,
    suffix: "%",
    label: "Uptime guarantee",
    decimals: 1,
  },
];

const badges = [
  { name: "SOC 2 Type II", description: "Security certified" },
  { name: "GDPR", description: "Privacy compliant" },
  { name: "ISO 27001", description: "Information security" },
  { name: "HIPAA Ready", description: "Healthcare data" },
];

export default function TrustIndicators({ lang, dict }: { lang: string; dict: any }) {
  return (
    <Section className="relative overflow-hidden py-16 lg:py-20">
      <Container>
        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15">
                  <Icon size={24} className="text-blue-400" />
                </div>

                <div className="mt-4 text-3xl font-black tracking-tight text-white">
                  <StatsCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Security badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {badge.name}
                  </p>
                  <p className="text-xs text-slate-500">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Enterprise-grade security and compliance built into every product
        </p>
      </Container>
    </Section>
  );
}

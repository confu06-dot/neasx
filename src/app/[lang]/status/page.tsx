import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Real-time status of all NEASX products and infrastructure.",
};

const services = [
  { name: "Writer", status: "operational", uptime: "99.99%" },
  { name: "Chat", status: "operational", uptime: "99.99%" },
  { name: "Agent", status: "operational", uptime: "99.98%" },
  { name: "Studio", status: "operational", uptime: "99.99%" },
  { name: "Voice", status: "operational", uptime: "99.97%" },
  { name: "Vision", status: "operational", uptime: "99.99%" },
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Billing", status: "operational", uptime: "99.95%" },
];

const incidents = [
  {
    date: "Jul 28, 2026",
    title: "Increased API latency for 12 minutes",
    status: "Resolved",
    description:
      "A brief increase in latency was observed on the API service. It was resolved automatically and no data was lost.",
  },
  {
    date: "Jun 15, 2026",
    title: "Agent scheduled runs delayed",
    status: "Resolved",
    description:
      "Some scheduled Agent runs were delayed up to 20 minutes during infrastructure maintenance. All runs completed successfully.",
  },
];

export default function StatusPage() {
  const operationalCount = services.filter(
    (s) => s.status === "operational"
  ).length;

  return (
    <Section className="relative overflow-hidden !pt-32 !pb-20 lg:!pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[170px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>System Status</Badge>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            All systems{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-500 bg-clip-text text-transparent">
              operational.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-8 text-slate-400">
            {operationalCount} of {services.length} services are operational.
          </p>
        </div>

        {/* Services */}
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${
                i > 0 ? "border-t border-white/5" : ""
              }`}
            >
              <span className="text-sm font-semibold text-white">
                {service.name}
              </span>

              <div className="flex items-center gap-6">
                <span className="hidden text-xs text-slate-500 sm:block">
                  {service.uptime} uptime
                </span>

                <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  <CheckCircle2 size={12} />
                  Operational
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Past incidents */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
            <Clock size={18} className="text-slate-500" />
            Past incidents
          </h2>

          <div className="mt-6 space-y-6">
            {incidents.map((incident) => (
              <div
                key={incident.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-white">
                    {incident.title}
                  </h3>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
                    {incident.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {incident.description}
                </p>

                <p className="mt-4 text-xs text-slate-600">
                  {incident.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
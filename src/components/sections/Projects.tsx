import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" className="relative py-24 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[140px]" />

      <Container>
        <div className="w-full">
          <Heading
            badge="FEATURED PROJECTS"
            title="Our"
            highlight="Work"
            description="Some of the software products we've designed and developed."
          />
        </div>

        <div className="mt-14 space-y-6 lg:mt-16 lg:space-y-8 w-full">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden p-0 transition-all duration-500 hover:border-white/15 hover:shadow-2xl hover:shadow-black/20 w-full"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] w-full">
                {/* PROJECT PREVIEW */}
                <div className="relative min-h-[360px] overflow-hidden bg-[#080f1c] p-6 sm:p-10 lg:min-h-[430px]">
                  {/* Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${project.color}`}
                  />

                  {/* Glow */}
                  <div
                    className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br blur-[100px] opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${project.color}`}
                  />

                  {/* Browser */}
                  <div className="relative z-10 mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      </div>

                      <div className="h-2 w-24 rounded-full bg-white/10 sm:w-32" />

                      <div className="h-6 w-6 rounded-md bg-white/5" />
                    </div>

                    {/* Dashboard */}
                    <div className="p-5 sm:p-6">
                      {/* Top */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-3 w-24 rounded-full bg-white/10" />
                          <div className="mt-3 h-6 w-36 rounded-lg bg-white/15" />
                        </div>

                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30" />
                      </div>

                      {/* Stats */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/5 bg-white/[0.035] p-4">
                          <div className="h-2 w-14 rounded-full bg-white/10" />
                          <div className="mt-3 h-5 w-20 rounded-md bg-blue-400/30" />
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/[0.035] p-4">
                          <div className="h-2 w-14 rounded-full bg-white/10" />
                          <div className="mt-3 h-5 w-20 rounded-md bg-violet-400/30" />
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.035] p-4">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="h-2 w-20 rounded-full bg-white/10" />
                          <div className="h-2 w-10 rounded-full bg-emerald-400/30" />
                        </div>

                        <div className="flex h-24 items-end gap-2">
                          {[30, 45, 35, 60, 50, 72, 65, 88, 76, 95].map(
                            (height, barIndex) => (
                              <div
                                key={barIndex}
                                className="flex-1 rounded-t-md bg-gradient-to-t from-blue-500/20 to-violet-400/50 transition-all duration-500 group-hover:from-blue-500/30 group-hover:to-violet-400/70"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        <div className="h-10 rounded-lg bg-white/[0.035]" />
                        <div className="h-10 rounded-lg bg-white/[0.035]" />
                        <div className="h-10 rounded-lg bg-white/[0.035]" />
                      </div>
                    </div>
                  </div>

                  {/* Project number */}
                  <div className="absolute bottom-5 left-6 text-[10px] font-semibold tracking-[0.3em] text-slate-600 sm:left-10">
                    PROJECT 0{index + 1}
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Featured Project
                    </span>

                    <span className="text-xs text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                  >
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
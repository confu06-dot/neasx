import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Heading
          badge="FEATURED PROJECTS"
          title="Our"
          highlight="Work"
          description="Some of the software products we've designed and developed."
        />

        <div className="mt-20 space-y-10">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden p-0"
            >
              <div className="grid lg:grid-cols-2">

                {/* Mockup */}

                <div className="relative flex items-center justify-center bg-[#0F172A] p-12">

                  className={`absolute inset-0 bg-gradient-to-br opacity-20 ${project.color}`}

                  <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] shadow-2xl">

                    <div className="flex gap-2 border-b border-white/10 p-4">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <div className="space-y-4 p-6">

                      <div className="h-8 rounded-lg bg-white/10" />

                      <div className="grid grid-cols-2 gap-4">

                        <div className="h-24 rounded-xl bg-blue-500/20" />

                        <div className="h-24 rounded-xl bg-violet-500/20" />

                      </div>

                      <div className="h-32 rounded-xl bg-white/5" />

                    </div>

                  </div>

                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-10">

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <button className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                    View Case Study →
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
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyNEASX from "@/components/sections/WhyNEASX";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Trusted />
        <Services />
        <Projects />
        <WhyNEASX />
        <Why />
        <Process />
        <Testimonials />
        <Faq />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
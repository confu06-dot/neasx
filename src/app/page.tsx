import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyNEASX from "@/components/sections/WhyNEASX";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Projects />
      <WhyNEASX />
      <CTA />
      <Footer />
      <Why />
      <Process />
      <Testimonials />
      <Faq />
    </>
  );
}
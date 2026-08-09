import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import WhyNEASX from "@/components/sections/WhyNEASX";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Ecosystem from "@/components/sections/Ecosystem";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Products />
        <WhyNEASX />
        <HowItWorks />
        <UseCases />
        <Ecosystem />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Services from "@/components/sections/Services";
import WhyNEASX from "@/components/sections/WhyNEASX";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Ecosystem from "@/components/sections/Ecosystem";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import { getDictionary, type Locale } from "@/dictionaries";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar lang={lang} dict={dict} />

      <main>
        <Hero lang={lang} dict={dict} />
        <TrustIndicators lang={lang} dict={dict} />
        <Services lang={lang} dict={dict} />
        <WhyNEASX lang={lang} dict={dict} />
        <HowItWorks lang={lang} dict={dict} />
        <UseCases lang={lang} dict={dict} />
        <Ecosystem lang={lang} dict={dict} />
        <Testimonials lang={lang} dict={dict} />
        <Pricing lang={lang} dict={dict} />
        <CTA lang={lang} dict={dict} />
      </main>

      <Footer lang={lang} dict={dict} />
    </>
  );
}

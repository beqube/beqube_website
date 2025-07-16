import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Mission from "../components/sections/Mission";
import Team from "../components/sections/Team";
import ContactSection from "../components/sections/ContactSection";
import TestimonialSection from "../components/sections/testimonial-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Mission />
      <Team />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}

import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;

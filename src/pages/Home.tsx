import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;

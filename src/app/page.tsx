import Hero from "./components/Hero";
import ProtectionBanner from "./components/ProtectionBanner";
import ComprehensiveSolutions from "./components/ComprehensiveSolutions";
import ServiceCategories from "./components/ServiceCategories";
import RobustServices from "./components/RobustServices";
import CompleteDefense from "./components/CompleteDefense";
import Statistics from "./components/Statistics";
import DefendingBusinesses from "./components/DefendingBusinesses";
import SuccessStories from "./components/SuccessStories";
import Testimonials from "./components/Testimonials";
import MonitoringSection from "./components/MonitoringSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main className="relative">
      <section id="home">
        <Hero />
      </section>
      <ProtectionBanner />
      <section id="solutions">
        <ComprehensiveSolutions />
      </section>
      <ServiceCategories />
      <section id="services">
        <RobustServices />
      </section>
      <CompleteDefense />
      <Statistics />
      <section id="about">
        <DefendingBusinesses />
      </section>
      <section id="projects">
        <SuccessStories />
      </section>
      <Testimonials />
      <MonitoringSection />
      <section id="blog">
        <BlogSection />
      </section>
      <ProtectionBanner />
    </main>
  );
}

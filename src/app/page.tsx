// app/page.tsx (Server Component)
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import FeaturedBooks from "../components/FeaturedBooks";
import { Categories } from "../components/Categories";
import { Testimonials } from "../components/Testimonial";
import { Footer } from "../components/Footer";
import LandingPageClient from "./LandingPageClient";

export default async function Home() {
  return (
    <LandingPageClient>
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <Footer />
    </LandingPageClient>
  );
}
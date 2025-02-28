import Image from "next/image";
import { Navbar } from "./Navbar";
import { HeroSection } from "./Hero";
import { FeaturedBooks } from "./Featured";
import { Categories } from "./Categories";
import { BestSellers } from "./BestSeller";
import { Testimonials } from "./Testimonial";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection ></HeroSection>
      <FeaturedBooks></FeaturedBooks>
      <Categories></Categories>
      <BestSellers></BestSellers>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

import Image from "next/image";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/Hero";
import { FeaturedBooks } from "../Components/Featured";
import { Categories } from "../Components/Categories";
import { BestSellers } from "../Components/BestSeller";
import { Testimonials } from "../Components/Testimonial";
import { Footer } from "../Components/Footer";

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

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import {FeaturedBooks}  from "../components/FeaturedBooks";
import { Categories } from "../components/Categories";
import { BestSellers } from "../components/BestSeller";
import { Testimonials } from "../components/Testimonial";
import { Footer } from "../components/Footer";

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

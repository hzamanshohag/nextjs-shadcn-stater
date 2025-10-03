import CTA from "@/components/shared/FAQ";
import Features from "@/components/shared/Features";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import ShowCase from "@/components/shared/ShowCase";
import Templates from "@/components/shared/Templates";
import Testimonials from "@/components/shared/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <ShowCase />
      <Templates />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default HomePage;

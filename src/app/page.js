"use client";
import Header from "./components/header";
import Feedback from "./components/feedback";
import Section from "./components/section";
import Service from "./components/service";
import Result from "./components/result";
import Partner from "./components/partner";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import Hero from "./components/hero-section/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease",
      // offset: 200,
    });
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="mx-20 max-sm:mx-0 box-border">
          <Header />
          <Hero />
          <Feedback />
        </div>
        <Partner />
        <Section />
        <Service />
        <div className="mx-20 max-sm:mx-0 box-border">
          <Result />
        </div>
        <Newsletter />
        <div className="mx-20 max-sm:mx-0 box-border">
          <Footer />
        </div>
      </div>
    </>
  );
}

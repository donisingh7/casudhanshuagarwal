// src/pages/Home.jsx
import HeroSlider from "../components/home/HeroSlider.jsx";
import AboutBrief from "../components/home/AboutBrief.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import IndustriesStrip from "../components/home/IndustriesStrip.jsx";
import NetworkBlock from "../components/home/NetworkBlock.jsx";
import CtaBand from "../components/home/CtaBand.jsx";
import Testimonials from "../components/home/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutBrief />
      <ServicesGrid />
      <IndustriesStrip />
      <Testimonials /> 
      <NetworkBlock />
      <CtaBand />
    </>
  );
}

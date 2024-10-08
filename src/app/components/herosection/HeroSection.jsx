import Image from "next/image";
import GrayLogo from "../../public/graphics/CompleteLogoGray.png";
import ReachOutBtn from "../contact/ReachOutBtn";
import HeroQuote from "./HeroQuote";
import HeroBackground from "./HeroBackground";


export default function HeroSection() {
  return (
    <div
      id="hero-container"
      className="relative flex flex-col h-full w-full justify-end items-end bg-gray-500 p-4"
    >
      <HeroBackground />
      <ReachOutBtn />
      <HeroQuote />
      <p>coming 2024</p>
    </div>
  );
}
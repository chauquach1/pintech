import GrayLogo from "../../public/graphics/CompleteLogoGray.png";
import ReachOutBtn from "../contact/ReachOutBtn";
import HeroQuote from "./HeroQuote";
import HeroBackground from "./HeroBackground";


export default function HeroSection() {
  return (
    <div
      id="hero-container"
      className="relative flex flex-col flex-grow h-1/2 w-full justify-end items-end bg-white/5 p-4 rounded-lg"
    >
      <HeroBackground />
      <div className="flex flex-col h-1/2 w-1/2">
        <ReachOutBtn />
      </div>
      <HeroQuote />
      <p className="self-start">{"UNDER CONSTRUCTION..."}</p>
    </div>
  );
}
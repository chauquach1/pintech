import GrayLogo from "../../public/graphics/CompleteLogoGray.png";
import ReachOutBtn from "../contact/ReachOutBtn";
import HeroQuote from "./HeroQuote";
import HeroBackground from "./HeroBackground";
import ContactModal from "../contact/ContactModal";


export default function HeroSection() {
  return (
    <div
      id="hero-container"
      className="relative flex flex-col flex-grow h-1/2 w-full justify-end items-end  p-4 rounded-lg"
    >
      <HeroBackground />
      <div className="flex flex-col h-1/2 w-1/2">
        <ContactModal />
      </div>
      <HeroQuote />
      <p className="self-start">{"COMING NOVEMBER 2024"}</p>
    </div>
  );
}
import Image from "next/image";
import GrayLogo from "../../public/graphics/CompleteLogo1000.png";
import HeroQuote from "./HeroQuote";

export default function HeroBackground() {
  return (
    <div className="absolute self-start flex flex-row h-full w-full">
      <Image src={GrayLogo} alt="Complete Logo"
      className="self-center w-[70%] max-w-[2000px]"/>
    </div>
  );
}
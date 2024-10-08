import Image from "next/image";
import GrayLogo from "../../public/graphics/CompleteLogo1000px.svg";

export default function HeroBackground() {
  return (
    <div className="lg:absolute self-start flex flex-row h-full w-full">
      <Image src={GrayLogo} alt="Complete Logo"
      className="self-center w-fit lg:w-[70%] lg:max-w-[1800px]"/>
    </div>
  );
}
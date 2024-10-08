import HeroSection from "./components/herosection/HeroSection";

export default function Home() {
  return (
    <main className="relative flex flex-col flex-grow justify-end items-end w-full p-2 sm:p-4">
      <HeroSection />
    </main>
  );
}

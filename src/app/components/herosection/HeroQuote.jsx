const quotes = [
  "REVOLUTIONIZING",
  "AMR FLEET",
  "OPERATIONS"
];
const textClass = "leading-[1.1]";

export default function HeroQuote() {
  return (
    <div className="relative h-full w-full flex flex-col flex-grow justify-center font-semibold self-end text-2xl sm:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] text-right">
      {quotes.map((quote, index) => (
        <p key={index} className={textClass}>
          {quote}
        </p>
      ))}
    </div>
  );
}
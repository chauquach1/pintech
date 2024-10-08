import Image from "next/image";
import Arrow from "../../public/graphics/arrow.svg";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function ReachOutBtn() {
  return (
    <Button
      href="https://calendly.com/pintechcollective/intro?back=1&month=2024-10"
      as={Link}
      className=" sm:hidden flex flex-row self-start items-center justify-center text-xl my-auto  gap-1 p-2 w-fit h-fit"
    >
      {"REACH OUT"}
      <Image
        src={Arrow}
        alt="arrow"
        className="h-full w-[20px] max-w-[20px] fill-current"
      />
    </Button>
  );
}

import Image from "next/image";
import Arrow from "../../public/graphics/arrow.svg";
import { Button } from "@nextui-org/button";

export default function ReachOutBtn() {
  return (
    <Button className="flex flex-row items-center justify-center text-xl my-auto ms-auto gap-1 w-fit h-fit">
      <p> {"REACH OUT"} </p>
      <Image
        src={Arrow}
        alt="arrow"
        className="h-full w-[20px] max-w-[20px] fill-current"
      />
    </Button>
  );
};
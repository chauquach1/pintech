"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import Image from "next/image";
import localFont from 'next/font/local';
import PinTechColored from "../../public/graphics/PinTechColored.svg";

const fussion = localFont({
  src: '../../fonts/Fussion.ttf',
  display: 'swap',
})


export default function MainNav() {
  return (
    <Navbar isBlurred={false} position="sticky" className="min-h-10">

      <NavbarContent className="sm:flex flex-row w-full " justify="center">
        <NavbarItem>
          <Image src={PinTechColored} alt="PinTech" width={200} height={50} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

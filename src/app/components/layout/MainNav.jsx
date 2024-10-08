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
import localFont from 'next/font/local';

const fussion = localFont({
  src: '../../fonts/Fussion.ttf',
  display: 'swap',
})


export default function MainNav() {
  return (
    <Navbar isBlurred={false} position="sticky" className="min-h-10">
      <NavbarBrand>
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex flex-row w-full " justify="center">
        <NavbarItem>
          <h1 className={fussion.className + " text-gray-400"}>{"PINTECH"}</h1>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

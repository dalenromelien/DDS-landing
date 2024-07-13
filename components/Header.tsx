"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Pricing", link: "/pricing" },
    { label: "Contact Me", link: "/contact" },
    { label: "About", link: "/about" },
  ];

  return (
    <Navbar
      className="bg-primary text-base-100"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-base-100">
              Dalen&apos;s Digital Servicess
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="text-base-100 lg:flex flex-none hidden"
      >
        <NavbarItem className="mx-4">
          <Link href="/pricing" className="text-base-100">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-4">
          <Link href="/contact" className="text-base-100">
            Contact Me
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-4">
          <Link href="/about" className="text-base-100">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black-100 my-2"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

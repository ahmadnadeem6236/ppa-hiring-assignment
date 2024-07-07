"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../modetoggle";

function Header() {
  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Service",
      href: "#",
    },
    {
      name: "Feature",
      href: "#",
    },
    {
      name: "Product",
      href: "#",
    },
    {
      name: "Testimonial",
      href: "#",
    },
    {
      name: "FAQ",
      href: "#",
    },
  ];
  const mode = localStorage.getItem("theme");
  console.log(mode);

  return (
    <div className=" md:flex items-center md:justify-around h-[84px] pt-7 px-10 dark:bg-black">
      <div>
        {mode == "dark" ? (
          <Image width={111} height={21} src="darkLogo.svg" alt="logo" />
        ) : (
          <Image width={111} height={21} src="Logo.svg" alt="logo" />
        )}
      </div>
      <div className="hidden md:flex flex-row gap-10 h-[24px] ">
        {navItems.map((item) => {
          return (
            <a
              className="text-black dark:text-white"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div>
        <div className="hidden md:flex">
          <Button variant="ghost" className=" font-normal text-primary ">
            Login
          </Button>
          <Button className=" bg-primary rounded-xl text-white font-normal">
            Sign Up
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;

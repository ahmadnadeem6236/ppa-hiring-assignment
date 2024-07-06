import Image from "next/image";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="md:container md:flex items-center md:justify-around h-[84px] pt-7 px-10">
      <div>
        <Image width={111} height={21} src="Logo.svg" alt="logo" />
      </div>
      <div className="hidden md:flex flex-row gap-10 h-[24px]">
        {navItems.map((item) => {
          return (
            <a className="text-black" href={item.href} key={item.name}>
              {item.name}
            </a>
          );
        })}
      </div>
      <div>
        <div className="hidden md:flex">
          <Button className="bg-silver font-normal text-primary ">Login</Button>
          <Button className=" bg-primary rounded-xl text-white font-normal">
            Sign Up
          </Button>
          {/* <Button className="bg-white w-5">Toggle</Button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

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
    <div className=" container flex items-center justify-around h-[84px]">
      <div>
        <Image width={111} height={21} src="Logo.svg" alt="logo" />
      </div>
      <div className=" flex flex-row gap-10 h-[24px]">
        {navItems.map((item) => {
          return (
            <a className="text-black" href={item.href} key={item.name}>
              {item.name}
            </a>
          );
        })}
      </div>
      <div>
        <div className="">
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

import { socialIcons } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";

function Footer() {
  return (
    <div className=" bg-black">
      <div className="grid md:grid-cols-2 grid-rows-1 md:place-items-center md:h-[328px] ">
        <div className=" flex flex-col gap-5">
          <Image src="/nexcent.svg" width={191} height={30} alt="Nexcent" />
          <div className=" text-white">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className=" flex  gap-5">
            {socialIcons.map((icon) => {
              return (
                <div key={icon.index}>
                  <Button variant="ghost" className=" p-0">
                    <Image
                      src={icon.src}
                      width={32}
                      height={32}
                      alt={icon.name}
                    />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:flex-row md:gap-24 flex flex-col  gap-3">
          <div>
            <div className=" flex flex-col text-white gap-5">
              <div>
                <h2 className=" text-3xl font-semibold">Company</h2>
              </div>
              <div className=" flex flex-col gap-2">
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
              </div>
            </div>
          </div>
          <div>
            <div className=" md:flex md:flex-col text-white gap-5  ">
              <div>
                <h2 className=" text-3xl font-semibold">Support</h2>
              </div>
              <div className=" flex flex-col gap-2">
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  h-full items-center justify-center gap-3">
              <div>
                <h2 className=" text-white text-3xl font-semibold">
                  Stay up to date
                </h2>
              </div>
              <div className=" flex  justify-end  items-center">
                <input
                  className=" p-2 px-8 rounded-xl bg-d_Grey relative "
                  type="text"
                  placeholder="Your email address"
                />
                <Image
                  className=" absolute  pr-2  w-6"
                  src="/send.svg"
                  width={32}
                  height={32}
                  alt="sendicon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

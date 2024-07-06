import { clientLogo } from "@/lib/data";
import { log } from "console";
import Image from "next/image";

function Clients() {
  return (
    <div className="md:container flex flex-col justify-center items-center gap-20">
      <div className=" flex flex-col items-center gap-5">
        <h2 className=" md:text-4xl text-2xl text-d_Grey font-semibold">
          Our Clients
        </h2>
        <p className=" font-light leading-3 tracking-wider text-slate-500">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="md:h-[98px] md:w-[1125px]">
        <div className=" flex justify-between gap-5">
          {clientLogo.map((logo) => {
            return (
              <Image
                src={logo.src}
                width={40}
                height={40}
                alt={logo.name}
                key={logo.index}
                quality={100}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;

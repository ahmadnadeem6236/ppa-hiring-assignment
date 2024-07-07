import Image from "next/image";
import { Button } from "../ui/button";
import { clientLogo } from "@/lib/data";

function Customers() {
  return (
    <div className="md:container px-10 bg-silver dark:bg-black">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 ">
        <div className="w-64 md:w-auto">
          <Image src="/tesla.svg" width={328} height={328} alt="tesla Image" />
        </div>
        <div className="md:w-2/3 md:px-24 flex md:flex-col flex-col gap-5 ">
          <p className=" text-sm font-light dark:text-gray-300 text-d_Grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h2 className=" text-2xl font-semibold text-primary md:text-start">
            Tim Smith
          </h2>
          <p className="text-sm font-light text-center md:text-start">
            British Dragon Boat Racing Association
          </p>
          <div className=" flex items-center justify-around md:justify-start md:gap-10 gap-1  w-full">
            {clientLogo.map((logo) => {
              return (
                <div key={logo.index} className=" w-7 md:w-fit">
                  <Image
                    src={logo.src}
                    width={38}
                    height={38}
                    alt="clients-logo"
                  />
                </div>
              );
            })}
            <Button variant={"ghost"} className=" text-primary flex gap-2">
              Meet All Customers
              <Image src="arrow.svg" width={20} height={20} alt="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;

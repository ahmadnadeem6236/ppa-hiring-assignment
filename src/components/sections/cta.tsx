import Image from "next/image";
import { Button } from "../ui/button";

function CTA() {
  return (
    <div className=" bg-silver dark:bg-black ">
      <div className=" container flex flex-col justify-around  items-center md:h-[300px] h-[230px]">
        <div>
          <h1 className=" md:text-6xl text-4xl text-center leading-relaxed font-semibold text-black dark:text-gray-100">
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h1>
        </div>
        <div className="">
          <Button
            variant={"ghost"}
            className=" bg-primary rounded-xl text-white flex gap-2 items-center justify-center"
          >
            Get Demo
            <span className="text-white">
              {" "}
              <Image src="whiteArrow.svg" width={20} height={20} alt="arrow" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CTA;

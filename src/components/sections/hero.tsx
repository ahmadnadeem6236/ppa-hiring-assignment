"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" dark:bg-black md:min-h-screen flex flex-col md:justify-center md:items-center px-20 mt-10 md:mt-0 ">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className=" flex justify-center md:gap-24 ">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold md:text-6xl text-2xl dark:text-gray-300 text-d_Grey">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary md:text-6xl text-2xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light md:text-sm text-slate-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="md:w-[128px] w-[80px] md:h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  className=" min-w-32"
                  src="/heroImg.png"
                  width={300}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex justify-center md:gap-24">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold md:text-6xl text-2xl dark:text-gray-300 text-d_Grey">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary md:text-6xl text-2xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light text-sm text-slate-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="md:w-[128px] w-[80px] md:h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  src="/heroImg.png"
                  width={300}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex justify-center md:gap-24">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold md:text-6xl text-2xl text-d_Grey">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary md:text-6xl text-2xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light text-sm dark:text-gray-300 text-slate-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="md:w-[128px] w-[80px] md:h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  src="/heroImg.png"
                  width={300}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div>
        <div className="flex justify-center p-4">
          <div className="flex space-x-2">
            <span
              className={cn(
                "block h-2 w-2 rounded-full bg-green-200",
                current == 1 && " bg-primary"
              )}
            />
            <span
              className={cn(
                "block h-2 w-2 rounded-full bg-green-200",
                current == 2 && " bg-primary"
              )}
            />
            <span
              className={cn(
                "block h-2 w-2 rounded-full bg-green-200",
                current == 3 && " bg-primary"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

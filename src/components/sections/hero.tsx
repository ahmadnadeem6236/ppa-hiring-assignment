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
    <div className="container min-h-screen flex flex-col justify-center items-center">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className=" flex justify-center gap-24">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold text-6xl text-black">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary text-6xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light text-sm text-slate-400">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="w-[128px] h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  src="/heroImg.png"
                  width={391}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex justify-center gap-24">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold text-6xl text-black">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary text-6xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light text-sm text-slate-400">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="w-[128px] h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  src="/heroImg.png"
                  width={391}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex justify-center gap-24">
              <div className="flex flex-col justify-center gap-5">
                <h1 className=" font-semibold text-6xl text-black">
                  Lessons and insights <br />
                </h1>
                <p className=" text-primary text-6xl font-semibold">
                  from 8 years
                </p>
                <p className=" font-light text-sm text-slate-400">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button className="w-[128px] h-[52px] rounded-[8] text-white">
                  Register
                </Button>
              </div>
              <div>
                <Image
                  src="/heroImg.png"
                  width={391}
                  height={417}
                  alt="Hero Image"
                />
              </div>
            </div>
          </CarouselItem>

          {/* <CarouselItem>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            velit, error commodi reprehenderit sint laboriosam, quia omnis
            maxime, voluptas cumque perspiciatis a deserunt accusantium minus
            nostrum sit quisquam sequi vero;
          </CarouselItem>
          <CarouselItem>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            velit, error commodi reprehenderit sint laboriosam, quia omnis
            maxime, voluptas cumque perspiciatis a deserunt accusantium minus
            nostrum sit quisquam sequi vero.---
          </CarouselItem> */}
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

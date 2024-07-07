import Image from "next/image";
import { Button } from "../ui/button";

function Marketing() {
  return (
    <div className="md:container px-10">
      <div className=" flex flex-col items-center justify-center gap-8">
        <div className=" flex flex-col items-center gap-5 w-2/3">
          <h2 className=" font-semibold md:text-4xl text-xl dark:text-gray-300 text-d_Grey text-center ">
            Caring is the new marketing
          </h2>
          <p className=" font-light leading-5 dark:text-gray-300 text-d_Grey text-center">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-rows-1 items-end  md:gap-28 md:pt-32 gap-2">
            <div className=" bg-silver dark:bg-black rounded-xl drop-shadow-lg md:w-[317px] md:h-[158px] flex flex-col items-center pt-5 gap-5 ">
              <h4 className=" text-lg font-semibold dark:text-gray-300 text-d_Grey text-center">
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>

              <Button
                variant={"ghost"}
                className=" text-primary flex gap-2 mt-6"
              >
                Readmore
                <Image src="arrow.svg" width={20} height={20} alt="arrow" />
              </Button>
            </div>
            <div className=" bg-silver  dark:bg-black rounded-xl drop-shadow-lg md:w-[317px] md:h-[158px] flex flex-col items-center pt-5 gap-5 ">
              <h4 className="text-lg font-semibold dark:text-gray-300 text-d_Grey text-center">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h4>

              <Button variant={"ghost"} className=" text-primary flex gap-2">
                Readmore
                <Image src="arrow.svg" width={20} height={20} alt="arrow" />
              </Button>
            </div>
            <div className=" bg-silver dark:bg-black rounded-xl drop-shadow-lg md:w-[317px] md:h-[158px] flex flex-col items-center pt-5 gap-5 ">
              <h4 className=" text-lg font-semibold text-d_Grey dark:text-gray-300 text-center">
                Revamping the Membership Model with Triathlon Australia
              </h4>

              <Button
                variant={"ghost"}
                className=" text-primary flex gap-2 mt-6"
              >
                Readmore
                <Image src="arrow.svg" width={20} height={20} alt="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;

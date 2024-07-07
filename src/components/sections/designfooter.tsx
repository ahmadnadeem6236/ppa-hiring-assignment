import Image from "next/image";
import { Button } from "../ui/button";

function DesignFooter() {
  return (
    <div className="md:container">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 ">
        <div className="w-64 md:w-fit">
          <Image
            src="/designfooter.svg"
            width={441}
            height={328}
            alt="Design Image"
          />
        </div>
        <div className="md:w-2/3 md:px-24 flex md:flex-col flex-col gap-5 ">
          <h2 className=" text-2xl font-semibold dark:text-white text-d_Grey  md:text-start">
            How to design your site footer like we did
          </h2>
          <p className=" text-sm font-light dark:text-gray-200 text-d_Grey">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button className=" rounded-xl w-fit text-white ">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default DesignFooter;

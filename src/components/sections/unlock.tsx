import Image from "next/image";
import { Button } from "../ui/button";

function Unlock() {
  return (
    <div className="md:container">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 ">
        <div className="w-64 md:w-fit">
          <Image
            src="/unlock.svg"
            width={441}
            height={328}
            alt="Unlock Image"
          />
        </div>
        <div className="md:w-2/3 md:px-24 flex md:flex-col flex-col gap-5 ">
          <h2 className=" text-2xl font-semibold dark:text-white text-d_Grey  md:text-start">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className=" text-sm font-light text-d_Grey dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className=" rounded-xl w-fit text-white ">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Unlock;

import Image from "next/image";
import { Button } from "../ui/button";

function Unlock() {
  return (
    <div className="md:container flex flex-col md:flex-row items-center justify-center ">
      <div className=" w-52 md:w-full">
        <Image src="/unlock.svg" width={441} height={328} alt="unlock Image" />
      </div>
      <div className=" px-20 flex flex-col items-center md:items-start gap-4 ">
        <h2 className=" text-2xl font-semibold text-d_Grey text-center md:text-start">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className=" text-sm font-light text-center md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className=" rounded-xl w-fit text-white ">Learn More</Button>
      </div>
    </div>
  );
}

export default Unlock;

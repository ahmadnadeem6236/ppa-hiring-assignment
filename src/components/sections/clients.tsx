import { clientLogos } from "@/lib/data";
import { log } from "console";
import Image from "next/image";

function Clients() {
  return (
    <div>
      <div>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div>
        <div>
          {clientLogos.map((logo) => {
            return <Image src={logo.src} alt={logo.name} key={logo.src} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;

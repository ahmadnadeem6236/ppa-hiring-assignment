import Achievements from "@/components/sections/achievements";
import Clients from "@/components/sections/clients";
import Community from "@/components/sections/community";
import CTA from "@/components/sections/cta";
import Customers from "@/components/sections/customers";
import DesignFooter from "@/components/sections/designfooter";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Marketing from "@/components/sections/marketing";
import Unlock from "@/components/sections/unlock";

export default function Home() {
  return (
    <div>
      <div id="top" className=" bg-silver dark:bg-black md:h-svh">
        <Header />
        <Hero />
      </div>
      <div className=" mt-32">
        <Clients />
      </div>
      <div className=" pt-10">
        <Community />
      </div>
      <div className="pt-10 p-12">
        <Unlock />
      </div>
      <div className="pt-10">
        <Achievements />
      </div>
      <div className=" pt-10  p-12 ">
        <DesignFooter />
      </div>
      <div className=" pt-9">
        <Customers />
      </div>
      <div className=" pt-9 ">
        <Marketing />
      </div>
      <div className="pt-9">
        <CTA />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

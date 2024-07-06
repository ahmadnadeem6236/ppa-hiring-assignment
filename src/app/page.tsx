import Achievements from "@/components/sections/achievements";
import Clients from "@/components/sections/clients";
import Community from "@/components/sections/community";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Unlock from "@/components/sections/unlock";

export default function Home() {
  return (
    <div>
      <div id="top" className=" bg-silver md:h-svh">
        <Header />
        <Hero />
      </div>
      <div className=" pt-10">
        <Clients />
      </div>
      <div className=" pt-10">
        <Community />
      </div>
      <div className="pt-10">
        <Unlock />
      </div>
      <div className="pt-10">
        <Achievements />
      </div>
    </div>
  );
}

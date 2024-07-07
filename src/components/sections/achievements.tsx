"use client";
import Image from "next/image";
import CountUp from "react-countup";

function Achievements() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-evenly justify-around items-center h-[288px] bg-silver dark:bg-slate-800 ">
      <div>
        <h2 className=" text-center md:text-start text-2xl md:text-4xl text-d_Grey font-semibold">
          Helping a local <br />{" "}
          <span className=" text-primary"> business reinvent itself</span>
        </h2>
        <p className=" font-light text-sm pt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="flex gap-4">
            <div>
              <Image src="/member.svg" width={48} height={48} alt="member" />
            </div>
            <div>
              <h2 className=" text-lg font-semibold dark:text-gray-300 text-d_Grey">
                <CountUp end={2245341} delay={0} />
              </h2>
              <p className="text-sm font-light">Members</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Image src="/clubs.png" width={58} height={58} alt="clubs" />
            </div>
            <div>
              <h2 className=" text-lg font-semibold text-d_Grey dark:text-gray-300">
                <CountUp end={46328} />
              </h2>
              <p className="text-sm font-light">Clubs</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Image
                src="/eventBooking.svg"
                width={48}
                height={48}
                alt="Event Booking"
              />
            </div>
            <div>
              <h2 className=" text-lg font-semibold text-d_Grey dark:text-gray-300">
                <CountUp end={828867} />
              </h2>
              <p className="text-sm font-light">Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Image src="/payment.svg" width={48} height={48} alt="payment" />
            </div>
            <div>
              <h2 className=" text-lg font-semibold text-d_Grey dark:text-gray-300">
                <CountUp end={1926436} />
              </h2>
              <p className="text-sm font-light">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

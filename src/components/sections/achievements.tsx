function Achievements() {
  return (
    <div className=" flex flex-col md:flex-row justify-around items-center h-[288px] bg-silver">
      <div>
        <h2 className=" text-center md:text-start text-2xl text-d_Grey font-semibold">
          Helping a local <br />{" "}
          <span className=" text-primary"> business reinvent itself</span>
        </h2>
        <p className=" font-light text-sm pt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div>member</div>
          <div>clubs</div>
          <div>event bookings</div>
          <div>Payments</div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

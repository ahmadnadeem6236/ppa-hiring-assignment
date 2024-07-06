import Image from "next/image";

function Community() {
  return (
    <div className="md:container flex flex-col items-center justify-center gap-8">
      <div className=" flex flex-col items-center gap-5">
        <h2 className=" font-semibold md:text-4xl text-xl text-d_Grey md:w-[542px] text-center w-10/12">
          Manage your entire community in a single system
        </h2>
        <p className=" font-light leading-3 tracking-wider text-slate-500">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 grid-rows-1  md:gap-28 md:pt-3">
          <div className="border-b-2 border-x-2 rounded-xl drop-shadow-sm md:w-[299px] md:h-[260px] flex flex-col items-center pt-5 gap-5">
            <Image
              src="/communityIcon/comIcon1.svg"
              width={65}
              height={65}
              alt="comIcon"
            />
            <h3 className="md:text-3xl text-lg font-semibold text-d_Grey text-center">
              Membership Organisations
            </h3>
            <p className=" text-sm font-light text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="border-b-2 border-x-2 rounded-xl drop-shadow-sm  md:w-[299px] md:h-[260px] flex flex-col items-center pt-5 gap-5">
            <Image
              src="/communityIcon/comIcon2.svg"
              width={65}
              height={65}
              alt="comIcon"
            />
            <h3 className="md:text-3xl text-lg font-semibold text-d_Grey text-center">
              National Associations
            </h3>
            <p className=" text-sm font-light text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className=" border-b-2 border-x-2 rounded-xl drop-shadow-sm  md:w-[299px] md:h-[260px] flex flex-col items-center pt-5 gap-5">
            <Image
              src="/communityIcon/comIcon3.svg"
              width={65}
              height={65}
              alt="comIcon"
            />
            <h3 className="md:text-3xl text-lg font-semibold text-d_Grey text-center">
              Clubs And <br /> <span>Groups</span>
            </h3>
            <p className=" text-sm font-light text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Community;

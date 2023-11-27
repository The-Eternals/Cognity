const HealthPackages = () => {
  return (
    <div className="flex  flex-col px-[8rem] gap-16 mt-12">
      <div className=" flex justify-center items-center ">
        <div className="w-[80%] flex flex-col gap-5">
          <p className="text-center text-xl font-semibold">Pricing</p>
          <h3 className="text-center text-5xl font-semibold">
            Choose of Mental Health Consultation Packages for Your Needs
          </h3>
        </div>
      </div>
      <div className=" flex justify-around">
        <div className="flex flex-col items-center border-2 border-black rounded-3xl p-14 gap-10 ">
          <div className="text-center">
            <p className=" font-bold  text-base">Basic</p>
            <span className="font-bold flex  items-end">
              <h4 className="text-4xl">$69.99/</h4>
              <p className="text-sm ">month</p>
            </span>
          </div>
          <div className=" text-sm flex flex-col gap-3 ">
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
          </div>
          <button className="bg-[#EC744A] text-white px-10 py-2 rounded-3xl">
            {" "}
            Choose Now
          </button>
        </div>
        <div className="flex flex-col items-center border-2 border-black rounded-3xl p-14  gap-10">
          <div className="text-center">
            <p className=" font-bold  text-base">Basic</p>
            <span className="font-bold flex  items-end">
              <h4 className="text-4xl">$69.99/</h4>
              <p className="text-sm ">month</p>
            </span>
          </div>
          <div className=" text-sm flex flex-col gap-3 ">
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
          </div>
          <button className="bg-[#EC744A] text-white px-10 py-2 rounded-3xl">
            {" "}
            Choose Now
          </button>
        </div>
        <div
          className=" flex flex-col items-center rounded-3xl p-14 gap-10"
          style={{
            backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
          }}
        >
          <div className="text-center">
            <p className=" font-bold  text-base text-white">Basic</p>
            <span className="font-bold flex  items-end text-white">
              <h4 className="text-4xl">$69.99/</h4>
              <p className="text-sm ">month</p>
            </span>
          </div>
          <div className=" text-sm flex flex-col gap-3 text-white ">
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
            <p>Lorem ipsum dolor sit amet cons.</p>
          </div>
          <button className="bg-[#EC744A] text-white px-10 py-2 rounded-3xl">
            {" "}
            Choose Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;

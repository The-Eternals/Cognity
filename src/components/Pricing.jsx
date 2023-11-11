const Pricing = () => {
  return (
    <>
      <div className="px-[8rem] flex flex-col gap-16">
        <div className=" flex justify-center items-center ">
          <div className="w-[80%] flex flex-col gap-5">
            <p className="text-center text-xl font-semibold">Pricing</p>
            <h3 className="text-center text-5xl font-semibold">
              Choose of Mental Health Consultation Packages for Your Needs
            </h3>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div
            className="flex rounded-xl"
            style={{
              backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
            }}
          >
            <div className="flex w-full justify-between p-8">
              <div className="flex justify-center items-center gap-10">
                <input
                  type="checkbox"
                  className=" w-5 h-5 rounded-xl  "
                  name=""
                  id=""
                />
                <div className="">
                  <h5 className="text-white font-semibold text-2xl">Basic</h5>
                  <p className=" text-white w-52">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className="text-white text-3xl font-semibold">
                  {" "}
                  $69.99/ <span className="text-sm"> Month</span>
                </p>
                <button className="text-white text-sm p-2 bg-[#EC744A] px-8 py-3 rounded-3xl text-center">
                  See pricing
                </button>
              </div>
            </div>
          </div>

          <div className=" border-2 rounded-xl border-black">
            <div className="flex w-full justify-between p-5">
              <div className="flex justify-center items-center gap-10">
                <input
                  type="checkbox"
                  className=" w-5 h-5 rounded-xl  "
                  name=""
                  id=""
                />
                <div className="">
                  <h5 className="font-semibold text-2xl">Basic</h5>
                  <p className="  w-52">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className=" text-3xl font-semibold">
                  {" "}
                  $69.99/ <span className="text-sm"> Month</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" border-2 rounded-xl border-black">
            <div className="flex w-full justify-between p-5">
              <div className="flex justify-center items-center gap-10">
                <input
                  type="checkbox"
                  className=" w-5 h-5 rounded-xl  "
                  name=""
                  id=""
                />
                <div className="">
                  <h5 className=" font-semibold text-2xl">Basic</h5>
                  <p className=" w-52">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className=" text-3xl font-semibold">
                  {" "}
                  $69.99/ <span className="text-sm"> Month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

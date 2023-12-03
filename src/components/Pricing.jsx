import { Fragment } from "react";

const Pricing = () => {
  return (
    <Fragment>
      <div className="px-[8rem] flex flex-col gap-16">
        <div className=" flex justify-center items-center ">
          <div className="w-[80%] flex flex-col gap-5">
            <p className="text-center text-xl font-semibold">Pricing</p>
            <h3 className="text-center text-5xl font-semibold">
              Choose the Mental Health Consultation Packages for Your Needs
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
                  <h5 className="text-white font-semibold text-3xl">Basic</h5>
                  <p className=" text-white">
                    <ul className="list-disc" >
                      <li>Access to articles and self-help resources.</li>
                      <li>Weekly newsletter subscription.</li>
                      <li>Limited access to forums.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className="text-white text-3xl font-semibold">
                  {" "}
                  $9.99/ <span className="text-sm"> Month</span>
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
                  <h5 className="font-semibold text-3xl">Standard Plan</h5>
                  <p className="  ">
                    <ul className="list-disc" >
                      <li>Full access to articles, forums, and self-help tools.</li>
                      <li>Bi-weekly live webinars or Q&A sessions.</li>
                      <li>Exclusive content and downloadable resources.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className=" text-3xl font-semibold">
                  {" "}
                  $29.99/ <span className="text-sm"> Month</span>
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
                  <h5 className=" font-semibold text-3xl">Premium Plan</h5>
                  <p className=" ">
                    <ul className="list-disc" >
                      <li>Unlimited access to all features.</li>
                      <li>Monthly one-on-one sessions with a certified therapist or counselor.</li>
                      <li>Priority support and personalized content suggestions.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className=" text-3xl font-semibold">
                  {" "}
                  $59.99/ <span className="text-sm"> Month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;

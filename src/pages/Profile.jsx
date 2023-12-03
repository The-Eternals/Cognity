import { Fragment, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";

const Profile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Navbar2 title="Pricing" />
      <div className=" flex justify-between items-center  px-[8rem]  w-full flex-col gap-8 pt-10">
        <div className="flex flex-col justify-center align-center gap-5 w-full">
          <p className="font-bold text-2xl  text-center">Pricing</p>
          <h2 className="font-bold text-[2.6rem] text-center px-20 ">
            Choose the Mental Health Consultation Packages for Your Needs
          </h2>
        </div>
        <div className="w-full h-full flex  justify-evenly gap-5">
          <div className=" w-[350px] h-[400px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600 border-black border-2 hover:bg-gradient-to-r from-[#5fb47d] hover:bg-[#017d6e]">
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl text-center">Basic</h2>
                <h5 className=" font-bold text-3xl">$9.99/month</h5>
                <ul className="list-disc " >
                  <li>Access to articles and self-help resources.</li>
                  <li>Weekly newsletter subscription.</li>
                  <li>Limited access to forums.</li>
                </ul>
              </div>
              <div className="flex flex-row items-start -mt-5  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg text-white">
                  See detail
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[350px] h-[400px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600 border-black border-2 hover:bg-gradient-to-r from-[#5fb47d] hover:bg-[#017d6e]">
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl text-center">Standard</h2>
                <h5 className=" font-bold text-3xl">$9.99/month</h5>
                <ul className="list-disc" >
                  <li>Full access to articles, forums, and self-help tools.</li>
                  <li>Bi-weekly live webinars.</li>
                  <li>Exclusive content.</li>
                </ul>
              </div>
              <div className="flex flex-row items-start -mt-5  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg text-white">
                  See detail
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[350px] h-[400px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600 border-black border-2 hover:bg-gradient-to-r from-[#5fb47d] hover:bg-[#017d6e]">
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl text-center">Premium</h2>
                <h5 className=" font-bold text-3xl">$59.99/month</h5>
                <ul className="list-disc" >
                  <li>Unlimited access to all features.</li>
                  <li>Monthly one-on-one sessions.</li>
                  <li>Priority support and personalized content suggestions.</li>
                </ul>
              </div>
              <div className="flex flex-row items-start -mt-5  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg text-white">
                  See detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default Profile;

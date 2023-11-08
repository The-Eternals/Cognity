import { Fragment } from "react";
import homeSvg from "../assets/svg/5 - Cardiologist.svg";
import { useNavigate } from "react-router";
import Experieencedetails from "../components/ExperienceDetails";
import Whychoose from "../components/whyChoose";
import About from "../components/About"

const Home = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="bg-[#fcf8f4]">
        <div className="flex justify-between px-[8rem]">
          <div className="w-[34rem] mt-14">
            <h1 className="text-5xl font-semibold">
              Healthy Minds, Happy <br /> Lives{" "}
              <span className=" text-[#ec744a]">Mental Health</span>
              <br />
              Consultancy
            </h1>
            <p className="py-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              vel expedita optio velit quo voluptates molestias suscipit ratione
              doloribus facere.
            </p>
            {/* <button className=" bg-black text-white rounded-xl font-semibold px-8 h-10">Get Started</button> */}
            <div className="flex justify-start items-center gap-8 mt-10">
              <button
                onClick={() => Navigate("/Login")}
                className=" bg-black text-white rounded-xl font-semibold px-8 h-10 hover:bg-white hover:text-black hover:border-black hover:border-2"
              >
                Login
              </button>
              <button
                onClick={() => Navigate("/Register")}
                className=" bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-10 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2"
              >
                Register
              </button>
            </div>
          </div>
          <div className="w-[34rem] mt-[6.4rem]">
            <img src={homeSvg} alt="homeSvg" />
          </div>
        </div>
        <Experieencedetails/>
        <Whychoose/>
        <About/>
      </div>
    </Fragment>
  );
};

export default Home;

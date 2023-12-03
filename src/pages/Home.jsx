import { Fragment } from "react";
import homeSvg from "../assets/svg/5 - Cardiologist.svg";
import { useNavigate } from "react-router";
import Experieencedetails from "../components/ExperienceDetails";
import Card from "../components/Card";
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Whychoose from "../components/whyChoose";
import About from "../components/About";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <Navbar />
      <div className="bg-[#fcf8f4]">
        <div className="flex justify-between px-[8rem]">
          <div className="w-[34rem] mt-14">
            <h1 className="text-5xl font-semibold">
              Healthy Minds, Happy <br /> Lives{" "}
              <span className=" text-[#ec744a]">Mental Health</span>
              <br />
              Consultancy
            </h1>
            <p className="py-10 text-justify ">
              "Mindfulness is the compass guiding us towards inner peace and resilience in life's turbulent seas. Embracing mental health is not a weakness but a courageous act of self-care and self-discovery."
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
              <button
                onClick={() => Navigate("/TestPage")}
                className=" bg-[#017d6e] text-white rounded-xl font-semibold px-8 h-10 hover:text-[#017d6e] hover:border-[#017d6e] hover:bg-white hover:border-2"
              >
                Take a Test
              </button>
            </div>
          </div>
          <div className="w-[34rem] mt-[6.4rem]">
            <img src={homeSvg} alt="homeSvg" />
          </div>
        </div>
        <Experieencedetails />
        <Whychoose />
        <hr className="bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] h-3" />
        <About />
        <hr className="bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] h-3" />
        <Card />
        <Banner />
        <NewsLetter />
        <Pricing />
        <Testimonials />
        <hr className="bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] h-3" />
        <Faq />
        <hr className="bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] h-3" />
        <Blog />
      </div>
    </Fragment>
  );
};

export default Home;

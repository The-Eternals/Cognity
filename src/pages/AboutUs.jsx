import { Fragment, useEffect } from "react";
import AboutImg from "../assets/svg/Frame 80.svg";
import NavBar2 from "../components/Navbar2";
import Whychoose from "../components/whyChoose";
import Banner from "../components/Banner";
import Experieencedetails from "../components/ExperienceDetails";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import AboutImg2 from "../assets/svg/about2.svg";

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <NavBar2 title="About Us" />
      <div className="px-[8rem] flex justify-between py-20">
        <div className="w-[34rem]">
          <img src={AboutImg} alt="AboutImg" />
        </div>
        <div className="w-[34rem] mt-20">
          <h5 className=" text-xl font-bold ">About Us</h5>
          <h1 className="text-4xl font-semibold py-10">
            Discover the Faces <br /> Behind Our Mental <br /> Health
            Consultancy{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            repudiandae quam vitae voluptatum rem velit itaque incidunt
            consectetur adipisci animi accusantium corrupti, a quos inventore
            vel eos dolore vero eaque ipsa iure soluta. Ex consequuntur natus.
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            repudiandae quam vitae voluptatum rem velit itaque incidunt
            consectetur adipisci animi accusantium corrupti, a quos inventore
            vel eos dolore vero eaque ipsa iure soluta. Ex consequuntur natus.
          </p>
        </div>
      </div>
      <Whychoose />
      <Banner />
      <Experieencedetails />
      <div className="flex justify-between px-[8rem] pt-20">
        <div className="w-[35rem]">
          <p className=" font-semibold">Success Story</p>
          <h2 className=" text-3xl font-semibold py-5">
            Succes Story Breaking the Stigma The Success Story of a Mental
            Health Consultant
          </h2>
          <ul className=" flex flex-col">
            <li className=" gap-4 flex items-center mt-5">
              <i class="fa-solid fa-arrow-right"></i>
              <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.</p>
            </li>
            <li className=" gap-4 flex items-center mt-5">
              <i class="fa-solid fa-arrow-right"></i>
              <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.</p>
            </li>
            <li className=" gap-4 flex items-center  mt-5">
              <i class="fa-solid fa-arrow-right"></i>
              <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.</p>
            </li>
            <li className=" gap-4 flex items-center  mt-5">
              <i class="fa-solid fa-arrow-right"></i>
              <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam.</p>
            </li>
          </ul>
        </div>
        <div className=" w-[30rem]">
          <img src={AboutImg2} alt="" />
        </div>
      </div>
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default AboutUs;

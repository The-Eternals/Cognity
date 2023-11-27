import { Fragment } from "react";
import NavBar2 from "../components/Navbar2";

const ContactUs = () => {
  return (
    <Fragment>
      <NavBar2 title="Contact Us" />
      <div className="flex justify-between px-[8rem] pt-32">
        <div className="w-[30rem]">
          <h3 className="text-3xl font-semibold">
            Contact Us Today for Personalized Support and Assistance
          </h3>
          <p className=" text-sm py-2">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.{" "}
          </p>
          <ul className=" mt-6">
            <li className=" flex gap-2 justify-start items-center py-1">
              <i className="fa-solid fa-phone cursor-pointer"></i>
              <p className=" cursor-pointer">+911234567890</p>
            </li>
            <li className=" flex gap-2 justify-start items-center py-1">
              <i className="fa-solid fa-envelope cursor-pointer"></i>
              <p className=" cursor-pointer">rola@gmail.com</p>
            </li>
            <li className=" flex gap-2 justify-start items-center py-1">
              <i className="fa-solid fa-location-dot cursor-pointer"></i>
              <p className=" cursor-pointer">Chh Sambhajinagar.</p>
            </li>
          </ul>
        </div>
        <div>
          <div className=" flex justify-between gap-20">
            <div className="flex flex-col gap-2">
              <label className=" text-xl font-semibold" htmlFor="">
                First Name
              </label>
              <input
                className=" border-2 border-black rounded-full w-72 py-2 px-5"
                type="text"
                placeholder="Your first name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" text-xl font-semibold" htmlFor="">
                Last Name
              </label>
              <input
                className=" border-2 border-black rounded-full w-72 py-2 px-5"
                type="text"
                placeholder="Your Last name"
              />
            </div>
          </div>
          <div className=" flex justify-between gap-20 mt-8">
            <div className="flex flex-col gap-2">
              <label className=" text-xl font-semibold" htmlFor="">
                Email
              </label>
              <input
                className=" border-2 border-black rounded-full w-72 py-2 px-5"
                type="email"
                placeholder="Your first name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" text-xl font-semibold" htmlFor="">
                Phone number
              </label>
              <input
                className=" border-2 border-black rounded-full w-72 py-2 px-5"
                type="number"
                placeholder="Your Last name"
              />
            </div>
          </div>
          <div className="flex flex-col mt-7 gap-2">
            <label className=" text-xl font-semibold" htmlFor="">
              Message
            </label>
            <input
              className=" border-2 border-black rounded-xl px-5 h-40"
              type="text"
              placeholder="your message (Optional)"
            />
          </div>
          <div className=" flex flex-col p-12 justify-center items-center">
            <button className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;

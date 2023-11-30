import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/g8.svg";
import logo1 from "../assets/svg/navlogo.svg"


function NavBar2(props) {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] text-white">
        <div className=" flex justify-between items-center font-semibold h-16 px-[8rem] ">
          <div className="flex items-center gap-3">
            <img
              src={logo1}
              alt="Log"
              className="w-7 cursor-pointer"
              onClick={() => Navigate("/")}
            />
            <p
              onClick={() => Navigate("/")}
              className=" cursor-pointer text-2xl font-bold"
            >
              Cognity
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-10">
              <li onClick={() => Navigate("/")} className=" cursor-pointer">
                Home
              </li>
              <li
                onClick={() => Navigate("/Testpage")}
                className=" cursor-pointer"
              >
                Test
              </li>
              <li
                onClick={() => Navigate("/Profile")}
                className=" cursor-pointer"
              >
                Pricing
              </li>
              <li
                onClick={() => Navigate("/Dashboard")}
                className=" cursor-pointer"
              >
                Dashboard
              </li>
            </ul>
          </div>
          <div>
            <button onClick={() => Navigate("/ContactUs")} className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex px-[8rem] gap-10 p-10 items-center">
          <div className="w-1 h-52 bg-white"></div>
          <div>
            <h1 className="text-3xl font-bold">{props.title}</h1>
            <p className=" py-5 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              quaerat sunt, est cumque dolorum distinctio velit quibusdam ut
              ducimus eligendi dicta earum, animi atque! Atque assumenda
              suscipit unde voluptatibus quo.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar2;

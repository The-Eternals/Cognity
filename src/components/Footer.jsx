import { Fragment, useEffect } from "react";
import Logo from "../assets/svg/g8.svg";

const Footer = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
  return (
    <Fragment>
      <div className=" bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e]">
        <div className="flex justify-between px-[8rem] invert py-14">
          <div className="flex items-start gap-3">
            <img src={Logo} alt="Logo" className="cursor-pointer w-7" />
            <p className="text-2xl font-bold cursor-pointer ">Cognity</p>
          </div>
          <div>
            <p className="text-xl font-bold ">Services</p>
            <ul className="mt-6 ">
              <li className="flex gap-2 py-1 "><p className="cursor-pointer">Psychotherapy</p></li>
              <li className="flex gap-2 py-1 "><p className="cursor-pointer">Mental Counseling</p></li>
              <li className="flex gap-2 py-1 "><p className="cursor-pointer">Support Groups</p></li>
              <li className="flex gap-2 py-1 "><p className="cursor-pointer">Case Management</p></li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold cursor-pointer ">Contact</p>
            <ul className="mt-6 ">
              <li className="flex items-center justify-start gap-2 py-1 ">
                <i className="cursor-pointer fa-solid fa-phone"></i>
                <p className="cursor-pointer ">+911234567890</p>
              </li>
              <li className="flex items-center justify-start gap-2 py-1 ">
                <i className="cursor-pointer fa-solid fa-envelope"></i>
                <p className="cursor-pointer ">help.cognity@gmail.com</p>
              </li>
              <li className="flex items-center justify-start gap-2 py-1 ">
                <i className="cursor-pointer fa-solid fa-location-dot"></i>
                <p className="cursor-pointer ">Chh Sambhajinagar.</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold cursor-pointer ">Links</p>
            <ul className="mt-6 ">
              <li className="flex gap-2 py-1 cursor-pointer ">Privacy Policy</li>
              <li className="flex gap-2 py-1 cursor-pointer ">Term Of Use</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className=" min-w-3/12 px-[15px] py-0 flex flex-col justify-center items-center invert py-4">
          <h4 className="text-lg text-[black] capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-[black] before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
            follow us
          </h4>
          <div class="social-links">
            <a
              href="#"
              className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="inline-block h-10 w-10 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="p-1">copyright 2023 @Cognity all right reserved</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;

import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/g8.svg"

function NavBar() {

    const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="bg-[#fcf8f4] flex justify-between items-center font-semibold h-16 px-[8rem] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Log" className="cursor-pointer w-7" onClick={()=> Navigate('/')}/>
          <p onClick={()=> Navigate('/')} className="text-2xl font-bold cursor-pointer ">Cognity</p>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li onClick={()=>Navigate('/')} className="cursor-pointer ">Home</li>
            <li onClick={()=>Navigate('/Testpage')} className="cursor-pointer ">Test</li>
            <li onClick={()=>Navigate('/Profile')} className="cursor-pointer ">Pricing</li>
            <li onClick={()=>Navigate('/Dashboard')} className="cursor-pointer ">Dashboard</li>
            <li onClick={()=>Navigate('/Questions')} className="cursor-pointer ">FAQ - Self Help</li>
          </ul>
        </div>
        <div>
          <button onClick={() => Navigate('/ContactUs')} className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">Contact Us</button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;

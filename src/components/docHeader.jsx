import React from "react";
import { BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

function DocHeader({ OpenSidebar }) {
  return (
    <header
      className="header"
      // style={{
      //   backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
      // }}
    >
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left flex items-center gap-2">
        <BsSearch className="icon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Appointment, Patient etc"
          className="w-96 h-8 bg-transparent placeholder:text-sm placeholder:px-3 "
        />
      </div>
      <div className="flex gap-3 items-center">
        <CiCircleQuestion className="icon" />
        <FaRegBell className="icon" />
        <div className="flex items-center gap-4">
          <BsPersonCircle className="icon" />
          <div className=" flex gap-0 flex-col">
            <p className="font-semibold text-black text-base">Stephen Conley</p>
            <span className="text-xs">Cardiologist</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DocHeader;

import React, { Fragment } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { PiUserSquareLight } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";
import logo from "../assets/svg/logo.svg"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <Fragment>
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="" className=" invert h-8" />
        </div>

        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div className="flex flex-col h-[80vh] justify-between">
        <ul className=" flex flex-col p-3">
          <li className=" flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <LuLayoutGrid className="text-xl" />
              <p className="text-sm"> Overview</p>
            </a>
          </li>
          <li className=" flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <IoCalendarClearOutline className="text-xl" />
              <p className="text-sm">Appointment</p>
            </a>
          </li>
          <li className=" flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <BsPerson className="text-xl" />
              <p className="text-sm">My Patient</p>
            </a>
          </li>
          <li className=" flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <CiClock2 className="text-xl" />
              <p className="text-sm">Schedule Timing</p>
            </a>
          </li>
          <li className=" flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <MdOutlinePayment className="text-xl" />
              <p className="text-sm">Payments</p>
            </a>
          </li>
          <li className="flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <MdOutlineEmail className="text-xl" />
              <p className="text-sm">Messages</p>
            </a>
          </li>
          <li className="flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <GrDocumentText className="text-xl" />
              <p className="text-sm">Blog</p>
            </a>
          </li>
          <li className="flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <CiSettings className="text-xl" />
              <p className="text-sm">Settings</p>
            </a>
          </li>
        </ul>

        <ul className="px-3">
          <li className="flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <PiUserSquareLight className="text-xl" />
              <p className="text-sm font-semibold">Account</p>
            </a>
          </li>
          <li className="flex p-3 hover:bg-black hover:rounded">
            <a href="" className="flex gap-3 items-center">
              <RiLogoutBoxLine className="text-xl" />
              <p className="text-sm font-semibold">Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    </Fragment>
  );
}

export default Sidebar;

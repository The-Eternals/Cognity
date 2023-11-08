import React from "react";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function NavBar() {

    const Navigate = useNavigate();
  return (
    <div className="flex items-center justify-between h-[50px] sticky bg-[white] px-5 py-2.5 border-b-[lightgrey] border-b border-solid top-0">
      <div className="flex items-center gap-[30px]">
        <span onClick={()=>Navigate('/')} className="font-[bold] text-xl text-[black] cursor-pointer">Edumo</span>

        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />

        <div className="flex items-center gap-2.5 border p-[5px] rounded-[5px] border-solid border-[lightgrey]">
          <SearchOutlinedIcon />
          <input
            className="w-[500px] border-[none]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="flex items-center gap-2.5 font-medium">
          <img
            className="w-[30px] h-[30px] object-cover rounded-[50%]"
            src="https://images.pexels.com/photos/15253379/pexels-photo-15253379/free-photo-of-off-road-car-standing-on-a-snowed-side-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Harshal Rajnoor</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

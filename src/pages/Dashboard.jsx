// import { Fragment } from "react";
// import Navbar2 from "../components/Navbar2"

// const Dashboard = () => {
//   return (
//     <Fragment>
//       <Navbar2 title="Dashboard" />
//     </Fragment>
//   );
// };

// export default Dashboard;

import React, { Fragment, PureComponent } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { Cell, PieChart, Pie } from "recharts";
import { CiHospital1 } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Dashboard = () => {
  const COLORS = ["#7A6EFE", "#FFA901", "#24A8FA"];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];

  const Navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NavBar/>
      {/* <Sidebar /> */}
      <main className="main-container ">
        <div className="text-black flex flex-col justify-end">
          <h3 className="font-semibold text-lg">Welcome, Dr.stephen</h3>
          <p className="text-sm">Have a nice day at great work</p>
        </div>

        <div className="flex gap-4 justify-evenly mt-5 ">
          <div className="bg-[#7a6efe] rounded-lg flex  items-center gap-6 p-5 w-full">
            <div className="p-3 rounded-full bg-white/30">
              <IoCalendarClearOutline className="text-2xl" />
            </div>
            <div className=" flex flex-col">
              <h2 className="font-semibold text-lg">24.5 K</h2>
              <h3 className="text-xs">Appointment</h3>
            </div>
          </div>
          <div className="bg-[#ff5363] rounded-lg flex  items-center gap-6 p-5 w-full">
            <div className="p-3 rounded-full bg-white/30">
              <BsPerson className="text-2xl" />
            </div>
            <div className=" flex flex-col">
              <h2 className="font-semibold text-lg">164.5 K</h2>
              <h3 className="text-xs">Total Patient</h3>
            </div>
          </div>
          <div className="bg-[#ffa901] rounded-lg flex  items-center gap-6 p-5 w-full">
            <div className="p-3 rounded-full bg-white/30">
              <CiHospital1 className="text-2xl" />
            </div>
            <div className=" flex flex-col">
              <h2 className="font-semibold text-lg">164.5 K</h2>
              <h3 className="text-xs">Clinic Consulting</h3>
            </div>
          </div>
          <div className="bg-[#24a8fa] rounded-lg flex  items-center gap-6 p-5 w-full">
            <div className="p-3 rounded-full bg-white/30">
              <BsFillBellFill className="text-2xl" />
            </div>
            <div className=" flex flex-col">
              <h2 className="font-semibold text-lg">164.5 K</h2>
              <h3 className="text-xs">Total Patient</h3>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="mt-8">
            <h4 className="text-black font-semibold">Appointment Request</h4>
            <div className="w-[430px]  bg-white rounded-md p-4 mt-3">
              <ul className="flex flex-col gap-4">
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Bogdan Krivenchenko
                        </h4>
                        <p className="text-sm  ">
                          <span>45 Male </span>,<span>12 april 9:30</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-red-200 rounded text-sm text-red-500">
                      Declined
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Jenny wilson
                        </h4>
                        <p className="text-sm  ">
                          <span> Female </span>,<span>25 april 9:30 PM</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-blue-200 rounded text-sm text-blue-500">
                      Confirmed
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span>Male </span>,<span>12 april 9:30 AM</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-blue-200 rounded text-sm text-blue-500">
                      Declined
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Bogdan Krivenchenko
                        </h4>
                        <p className="text-sm  ">
                          <span>45 Male </span>,<span>12 april 9:30</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-red-200 rounded text-sm text-red-500">
                      Declined
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Jenny wilson
                        </h4>
                        <p className="text-sm  ">
                          <span> Female </span>,<span>25 april 9:30 PM</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-blue-200 rounded text-sm text-blue-500">
                      Confirmed
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span>Male </span>,<span>12 april 9:30 AM</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-blue-200 rounded text-sm text-blue-500">
                      Declined
                    </button>
                  </div>
                </li>
                <li className="">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span>Male </span>,<span>12 april 9:30 AM</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-20 h-7 bg-blue-200 rounded text-sm text-blue-500">
                      Declined
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="">
              <h4 className="text-black font-semibold">Patients</h4>
              <div className=" w-80 bg-white rounded mt-3 p-4">
                <ul className="flex flex-col gap-4">
                  <li className="">
                    <div className="text-black flex gap-6  justify-between items-center">
                      <div className=" flex gap-5 ">
                        <BsPerson className="text-blue-500 text-5xl bg-blue-50 rounded-full p-3 " />
                        <div className="">
                          <h4 className="font-semibold text-xl">24.5K</h4>
                          <p className="text-sm text-slate-400">New Patient</p>
                        </div>
                      </div>
                      <p className="flex gap-2 items-center text-blue-500  text-base">
                        <FaArrowTrendUp /> 15%
                      </p>
                    </div>
                  </li>
                  <li className="">
                    <div className="text-black flex gap-6  justify-between items-center">
                      <div className=" flex gap-5 ">
                        <BsPerson className="text-yellow-500 text-5xl bg-yellow-50 rounded-full p-3 " />
                        <div className="">
                          <h4 className="font-semibold text-xl">155.5K</h4>
                          <p className="text-sm text-slate-400">Old Patient</p>
                        </div>
                      </div>
                      <p className="flex gap-2 items-center text-blue-500  text-base">
                        <FaArrowTrendUp /> 15%
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-black font-semibold">Gender</h4>
              <div className="flex flex-col  w-80 p-5 rounded bg-white mt-3">
                <PieChart width={240} height={170}>
                  <Pie
                    data={data}
                    cx={120}
                    cy={80}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className="text-black flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className=" flex justify-center items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-[#FFA901]"></div>
                      <p className="text-base">Male</p>
                    </div>
                    <p className="text-sm">45%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className=" flex justify-center items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-[#7A6EFE]"></div>
                      <p className="text-base">Female</p>
                    </div>
                    <p className="text-sm">30%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className=" flex justify-center items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-[#24A8FA]"></div>
                      <p className="text-base">Child</p>
                    </div>
                    <p className="text-sm">25%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-black font-semibold">Today Appointments</h4>
            <div className=" w-[430px]  bg-white rounded mt-3 ">
              <ul className="flex flex-col pt-1">
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Bogdan Krivenchenko
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">
                            Clinic Consulting
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">Ongoing</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Jenny wilson
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">
                            Clinic Consulting
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">10:12 AM</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">Emergency</span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">10:12 AM</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Bogdan Krivenchenko
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">
                            Clinic Consulting
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">Ongoing</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Jenny wilson
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">
                            Clinic Consulting
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">10:12 AM</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded  px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">Emergency</span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">10:12 AM</p>
                  </div>
                </li>
                <li className="hover:bg-blue-200 rounded px-4 py-2">
                  <div className="text-black flex gap-6  justify-between items-center">
                    <div className=" flex gap-5 ">
                      <BsPerson className="text-black text-4xl bg-slate-500 rounded-full p-2 " />
                      <div className="">
                        <h4 className="font-semibold text-base">
                          Dianne Russel
                        </h4>
                        <p className="text-sm  ">
                          <span className="text-slate-500">Emergency</span>
                        </p>
                      </div>
                    </div>
                    <p className=" text-slate-600 text-sm ">10:12 AM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-black font-semibold">Recent Patient</h4>
          <table className="text-slate-800 w-full mt-3 table-auto ">
            <thead>
              <tr className="bg-slate-300 rounded-3xl text-left border-collapse border-[10px] border-slate-100">
                <th className="p-4">Patient Name</th>
                <th>Visit id</th>
                <th>Date</th>
                <th>Gender</th>
                <th>Diseases</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
              <tr className="bg-white border-collapse border-[10px] border-slate-100 rounded-3xl">
                <td className="p-2">
                  <p className="flex items-center gap-2">
                    <BsPerson className="text-5xl text-black bg-fuchsia-100 rounded-full p-2 " />
                    Deveon lane
                  </p>
                </td>
                <td>OPD-2345</td>
                <td>7/7/2018</td>
                <td>Male</td>
                <td>Anxiety</td>
                <td>Out-Patient</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </Fragment>
  );
};

export default Dashboard;

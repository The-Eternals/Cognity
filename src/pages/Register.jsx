import { Fragment, React, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Register", {
        name,
        userName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        Navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Navigate = useNavigate();
  return (
    <Fragment>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#434343_0%,black_100%)] p-5">
        <div className="w-6/12 flex flex-row-reverse bg-[white] min-h-[600px] overflow-hidden rounded-[10px]">
          <div className="flex-1 bg-[linear-gradient(120deg,#fdfbfb_0%,#ebedee_100%)center] bg-cover flex flex-col gap-[30px] p-[50px] rounded-[10px_0_0_10px]">
            <img src="" alt="" />
            <h1 className="text-6xl leading-[100px]">Cognity</h1>
            <p>
              Cognity is a web app that aims to address issues related to mental
              health.
            </p>
            <span className="text-sm font-semibold">
              Do you have an account?
            </span>
            <button
              className="w-6/12 text-[#555] font-[bold] cursor-pointer p-2.5 border-[none]"
              onClick={() => Navigate("/Login")}
            >
              Login
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-[15px] justify-center p-[50px]">
            <h1 className="text-[#555]">Register</h1>
            <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
              <input
                className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid"
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid"
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid"
                type="password"
                placeholder="Password"
                onClick={(e) => setPassword(e.target.value)}
              />
              <button className="w-6/12 bg-black text-[white] font-[bold] cursor-pointer p-2.5 border-[none]">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;

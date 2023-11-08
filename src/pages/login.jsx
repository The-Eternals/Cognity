import {React, useEffect} from "react";
import { useNavigate } from "react-router";

const Login = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
  const Navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#434343_0%,black_100%)] p-5">
      <div className="w-6/12 flex bg-[white] min-h-[600px] overflow-hidden rounded-[10px]">
        <div className="flex-1 bg-[linear-gradient(120deg,#fdfbfb_0%,#ebedee_100%)center] bg-cover flex flex-col gap-[30px] p-[50px] rounded-[10px_0_0_10px">
          <h1 className="text-[100px] leading-[100px]">Edumo</h1>
          <p>
            edumo is a web application that empowers users to showcase their
            academic and technical accomplishments.
          </p>
          <span className="text-sm font-semibold">Don't you have an account?</span>
          <button className="w-6/12 text-[#555] font-[bold] cursor-pointer p-2.5 border-[none]" onClick={() => Navigate("/Register")}>Register</button>
        </div>
        <div className="flex-1 flex flex-col gap-[15px] justify-center p-[50px]">
          <h1 className="text-[#555]">Login</h1>
          <form className="flex flex-col gap-[30px]">
            <input className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid" type="text" placeholder="Username" />
            <input className="px-2.5 py-5 border-b-[lightgrey] border-[none] border-b border-solid" type="password" placeholder="Password" />
            <button className="w-6/12 bg-black text-[white] font-[bold] cursor-pointer p-2.5 border-[none]">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

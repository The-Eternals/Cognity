import { Fragment, useState, useEffect } from "react";
import NavBar2 from "../components/Navbar2";
import { useNavigate } from "react-router";
import axios from "axios";

const ContactUs = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const sendContactData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Register", {
        firstName,
        lastName,
        email,
        phoneNumber,
      })
      .then((result) => {
        console.log(result);
        alert("Data sent successfully");
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Navigate = useNavigate();
  return (
    <Fragment>
      <NavBar2 title="Contact Us" />
      <div className="flex justify-between px-[8rem] pt-32">
        <div className="w-[30rem]">
          <h3 className="text-3xl font-semibold">
            Contact Us Today for Personalized Support and Assistance
          </h3>
          <p className="py-2 text-sm ">
            Feel free to ask any questions or give some suggestions. We'd love to hear from you.{" "}
          </p>
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
        <form onSubmit={sendContactData}>
          <div className="flex justify-between gap-20 ">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold " htmlFor="">
                First Name
              </label>
              <input
                className="px-5 py-2 border-2 border-black rounded-full w-72"
                type="text"
                placeholder="Your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold " htmlFor="">
                Last Name
              </label>
              <input
                className="px-5 py-2 border-2 border-black rounded-full w-72"
                type="text"
                placeholder="Your Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between gap-20 mt-8 ">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold " htmlFor="">
                Email
              </label>
              <input
                className="px-5 py-2 border-2 border-black rounded-full w-72"
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold " htmlFor="">
                Phone number
              </label>
              <input
                className="px-5 py-2 border-2 border-black rounded-full w-72"
                type="number"
                placeholder="Your Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-7">
            <label className="text-xl font-semibold " htmlFor="">
              Message
            </label>
            <textarea
              className="border-2 border-black rounded-xl"
              placeholder="your message (Optional)"
              name=""
              id=""
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center p-12 ">
            <button className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactUs;

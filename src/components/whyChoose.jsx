import ExpertImg from "../assets/svg/Group.svg";
import HolisticImg from "../assets/svg/007-psychologist.svg";
import Pendulum from "../assets/svg/014-pendulum.svg";

const Whychoose = () => {
  return (
    <div className="px-[8rem] flex flex-col justify-center items-center py-16">
      <div className="flex flex-col justify-center items-center">
        <h4 className="font-bold text-[2.6rem] text-center px-20">
          Why our mental health consultants are <br /> the best choice
        </h4>
      </div>

      <div className=" flex gap-16 justify-center items-center py-10">
        <div className="border-2 bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] border-black rounded-xl flex flex-col justify-center items-center p-10 shadow-xl shadow-[#4d4d4d] cursor-pointer">
          <img src={HolisticImg} alt="holisting-img" className=" w-32" />
          <h5 className=" mt-10 font-bold text-2xl">Holistic Approach</h5>
          <p className=" mt-5 font-extralight ">
            Explore a holistic path to mental wellness on our website, nurturing mind, body, and spirit for comprehensive and transformative care.
          </p>
        </div>
        <div className="border-2 bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] border-black rounded-xl flex flex-col justify-center items-center p-10 shadow-xl shadow-[#4d4d4d] cursor-pointer">
          <img src={ExpertImg} alt="holisting-img" className=" invert w-32" />
          <h5 className=" mt-10 font-bold text-2xl">Expertise Team</h5>
          <p className=" mt-5 font-extralight">
            Our mental health website is backed by a dedicated team of seasoned professionals, including psychologists, therapists, counselors, and psychiatrists.
          </p>
        </div>
        <div className="border-2 bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] border-black rounded-xl flex flex-col justify-center items-center p-10 shadow-xl shadow-[#4d4d4d] cursor-pointer">
          <img src={Pendulum} alt="holisting-img" />
          <h5 className=" mt-10 font-bold text-2xl">Accessibility</h5>
          <p className=" mt-5 font-extralight">
            Ensuring mental health website accessibility fosters inclusivity, offering vital resources and support for diverse individuals seeking guidance and understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;

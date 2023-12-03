import img1 from "../assets/Images/img 1.jpg";
import { useNavigate } from "react-router";

const Card = () => {

  const Navigate = useNavigate();

  return (
    <>
      <div className=" flex justify-between items-center  px-[8rem]  w-full flex-col gap-8 pt-10">
        <div className="flex flex-col justify-center align-center gap-5 w-full">
          <p className="font-bold text-2xl  text-center">Services</p>
          <h2 className="font-bold text-[2.6rem] text-center px-20 ">
            Empowering Minds Our Mental Health Consulting Services
          </h2>
        </div>
        <div className="w-full h-full flex  justify-evenly gap-5">
          <div
            className=" w-[300px] h-[350px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600	 "
            style={{
              backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url({}) `,
            }}
          >
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl leading-[38px] text-center text-white">
                  Addiction Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <button onClick={()=>Navigate("/AddictionTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                  Take a Test
                </button>
            </div>
          </div>

          <div
            className=" w-[300px] h-[350px] left-[412px] top-[278px] rounded-[30px]  shadow-xl shadow-gray-600"
            style={{
              backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url({}) `,
            }}
          >
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl leading-[38px] text-center text-white">
                  Anxiety Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <button onClick={()=>Navigate("/AnxietyTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                  Take a Test
                </button>
            </div>
          </div>

          <div
            className=" w-[300px] h-[350px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600"
            style={{
              backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url(${img1}) `,
            }}
          >
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl leading-[38px] text-center text-white">
                  Depression Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <button onClick={()=>Navigate("/DepressionTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                  Take a Test
                </button>
            </div>
          </div>

          <div
            className=" w-[300px] h-[350px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600"
            style={{
              backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url({}) `,
            }}
          >
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl leading-[38px] text-center text-white">
                  Psychosis Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
                <button onClick={()=>Navigate("/PsychosisTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                  Take a Test
                </button>
            </div>
          </div>
        </div>
        <div>
            <button onClick={() => Navigate("/TestPage")} className="bg-black border-2 border-black text-white rounded-xl font-semibold px-8 h-10 mt-5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2 text-lg">
              See more 
            </button>
          </div>
      </div>
    </>
  );
};

export default Card;

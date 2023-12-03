import { Fragment } from "react";
import { useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import NavBar2 from "../components/Navbar2";
import { useNavigate } from "react-router";
import img1 from "../assets/Images/img 1.jpg";


const TestPage = () => {

  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NavBar2 title="Test" />
      <div className=" flex justify-between items-center  px-[8rem]  w-full flex-col gap-16 pt-10">
        <div className="flex flex-col justify-center align-center gap-5 w-full">
          <h2 className="font-bold text-[2.6rem] text-center px-20 ">
            Empowering Minds Our Mental Health Consulting Services
          </h2>
        </div>
        <div className="w-full h-full flex  justify-evenly gap-8">
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
                  Quick Addiction Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/AddictionTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  Quick Anxiety Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/AnxietyTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  Depression Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Quick Depression Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/DepressionTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  Quick Psychosis Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/PsychosisTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                Take a Test
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex  justify-evenly gap-8">
          <div
            className=" w-[300px] h-[350px] left-[412px] top-[278px] rounded-[30px] shadow-xl shadow-gray-600	 "
            style={{
              backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url({}) `,
            }}
          >
            <div className="flex flex-col items-center gap-[50px] w-full h-full px-10  py-16">
              <div className=" flex flex-col items-center gap-[19px] p-0">
                <h2 className="font-semibold text-2xl leading-[38px] text-center text-white">
                  Youth Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Quick Youth Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/YouthTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  Parent Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Quick Parent Assessment (for child): Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/ParentTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  Bipolar Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Quick Bipolar Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/BipolarTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
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
                  PTSD Test
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Quick PTSD Assessment: Check Now.
                </p>
              </div>
              <button onClick={() => Navigate("/PtsdTest")} className="bg-[#ec744a] text-white rounded-full text-lg font-semibold px-10 py-2.5 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">
                Take a Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default TestPage;

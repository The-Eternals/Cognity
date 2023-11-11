import img1 from "../assets/Images/img 1.jpg";

const Card = () => {
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
                  Mental Counseling
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <div className="flex flex-row items-start  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg leading-[30px] text-white">
                  See detail
                </button>
              </div>
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
                  Mental Counseling
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <div className="flex flex-row items-start  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg leading-[30px] text-white">
                  See detail
                </button>
              </div>
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
                  Mental Counseling
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <div className="flex flex-row items-start  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg leading-[30px] text-white">
                  See detail
                </button>
              </div>
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
                  Mental Counseling
                </h2>
                <p className="text-white flex-none order-none grow-0 text-center">
                  Lorem ipsum dolor sit amet consectetur Convallis est
                </p>
              </div>
              <div className="flex flex-row items-start  px-10 py-2.5 rounded-[30px] bg-[#EC744A]">
                <button className="w-24 h-7 font-semibold text-lg leading-[30px] text-white">
                  See detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between p-10">
          <i class="fa-solid fa-arrow-left text-xl"></i>
          <i class="fa-solid fa-arrow-right text-xl"></i>
        </div>
      </div>
    </>
  );
};

export default Card;

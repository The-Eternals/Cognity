import img from "../assets/Images/banner.jpg";
import comma from "../assets/Images/“.png";
import comma1 from "../assets/Images/“.png";
const Banner = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center box-border my-10"
        style={{
          backgroundImage: `linear-gradient(180.16deg,rgba(39, 39, 39, 0.5) -55.32%,#000000 182.01%),url(${img}) `,
        }}
      >
        <div className="flex  w-full flex-col gap-5 px-[8rem] py-16">
          <div className="flex items-start">
            <img src={comma} alt="" />
          </div>
          <div className="">
            <h2 className="text-white text-5xl text-center px-14 font-semibold">
              Self-care is not a luxury. It's a necessity. Without it, we cannot
              be our best selves, mentally, emotionally, or physically.
            </h2>
          </div>
          <div className="flex justify-end">
            <img src={comma1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

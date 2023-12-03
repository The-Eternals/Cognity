
const NewsLetter = () => {
  const subHandler = () => {
    alert("Subscribed Successfully")
  }
  return (
    <>
      <div
        className="h-[400px] w-full box-border my-32"
        style={{
          backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
        }}
      >
        <div className="flex flex-col justify-center items-center  px-[8rem] py-20 gap-10">
          <div className="flex flex-col  gap-10 px-[11rem] ">
            <h2 className="text-white text-5xl font-semibold text-center">
              Join To Our Newsletter
            </h2>
            <p className=" text-white text-center ">
            Subscribe to our mental health newsletter for insightful articles, expert tips, uplifting stories, and practical strategies to nurture your well-being and navigate life's challenges with resilience.
            </p>
          </div>
          <div className="flex border-2 border-gray-300 border-solid rounded-[30px] w-1/2 h-12 ">
            <input
              type="text"
              placeholder="Your email"
              className="outline-none w-full  py-1 px-3 rounded-l-[30px] bg-transparent placeholder:text-white"
            />
            <button onClick={subHandler} className="outline-none bg-[#EC744A] text-white w-80 rounded-r-[30px] text-center">
              Subscribe Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;

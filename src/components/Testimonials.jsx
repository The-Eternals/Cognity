import img from "../assets/Images/man-icon.png";

const Testimonials = () => {
  return (
    <>
      <div className="flex px-[8rem] justify-evenly my-20 gap-10">
        <div className="p-10 flex flex-col gap-4">
          <p className=" text-xl font-semibold">Testimonials</p>
          <h3 className="text-4xl font-semibold w-96">
            Healing Words Testimonials from a Mental Health Consultant
          </h3>
        </div>
        <div className="flex gap-5">
          <div
            className=" flex flex-col items-center rounded-3xl p-10 w-80 h-96 gap-6"
            style={{
              backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
            }}
          >
            <img src={img} className="rounded-full w-20 h-20" />
            <p className="text-white text-sm text-center">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
              at quam adipiscing feugiat interdum mattis. Placerat donec risus
              diam.
            </p>
            <span className=" text-white font-bold">George J - Client</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black rounded-3xl p-10 w-80 h-96 gap-6">
            <img src={img} className="rounded-full w-20 h-20 " />
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
              at quam adipiscing feugiat interdum mattis. Placerat donec risus
              diam.
            </p>
            <span className="font-bold">George J - Client</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

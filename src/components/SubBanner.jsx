const SubBanner = () => {
  return (
    <div
      className=" flex h-96 w-full px-[8rem] gap-20 justify-start items-center "
      style={{
        backgroundImage: `linear-gradient(270deg, #007D6E 0%, #5EB47C 100%)`,
      }}
    >
      <div className="">
        <div className="w-1 h-52 bg-white"></div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-5xl font-semibold text-white">Pricing</h3>
        <p className="text-sm text-white w-[800px]">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam
          adipiscing feugiat interdum mattis. Placerat donec risus diam sed et.
          A in ullamcorper ipsum.{" "}
        </p>
      </div>
    </div>
  );
};

export default SubBanner;

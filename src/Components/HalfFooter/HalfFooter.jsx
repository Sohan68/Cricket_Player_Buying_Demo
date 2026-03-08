import img_4 from "../../assets/bg-shadow.png";

const HalfFooter = () => {
  return (
    <div
      id="halfFooter"
      className="absolute xl:bottom-96 md:bottom-[400px] sm:bottom-60 md:left-12 xl:left-36 min-[1441px]:left-44 md:w-[90%]
      xl:w-[80%] mx-auto h-72 min-[1441px]:h-80 rounded-xl hero  border border-white my-56 p-4 min-[1441px]:px-8 "
    >
      <div
        className="  text-center rounded-xl bg-slate-100 bg-no-repeat border border-gray-200  p-12 w-full mx-auto"
        style={{ backgroundImage: `url(${img_4})` }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="py-6 text-lg">
            Get the letest update and news right in your box !{" "}
          </p>
          <div className=" flex place-items-center gap-6">
            {" "}
            <label className="">
              <input
                type="text"
                className=" text-lg border border-gray-300 rounded-lg px-6 py-2"
                placeholder=" Enter your email"
              />
            </label>{" "}
            <button className="font-bold btn border border-gray-300 bg-[#DC6C60] rounded-lg px-6 py-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfFooter;

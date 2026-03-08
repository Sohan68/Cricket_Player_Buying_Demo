import img5 from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className=" bg-black md:pt-40 lg:pt-56">
      <img className="w-auto mx-auto md:pb-4 lg:pb-12" src={img5}></img>
      <footer className="footer bg-black text-gray-400 p-10 flex justify-around  ">
        <nav className="text-lg w-1/6">
          <h6 className="text-white font-bold">About Us</h6>
          <p>
            {" "}
            We are passionate team dedicated to provide the best service to our
            customers .
          </p>
        </nav>
        <nav className=" text-lg">
          <h6 className="text-white font-bold">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact</a>
        </nav>

        <form className="text-lg ">
          <h6 className=" text-white font-bold">Subscribe</h6>
          <fieldset className="form-control w-96 space-y-4 ">
            <label className="">
              <span className="  text-gray-400 ">
                Subscribe to our Newsletter for the letest update.
              </span>
            </label>
            <div className="join ">
              <input
                type="text"
                placeholder="Enter your email"
                className="input p-4 input-bordered rounded-lg -mr-2"
              />
              <button className="btn btn-primary font-bold  bg-[#DC6C60] text-black rounded-lg py-2 pl-6 pr-2 -ml-2">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className=" bg-black text-gray-500 ">
        <hr className="text-gray-500"></hr>
        <p className="w-1/4 py-8 mx-auto font-bold">
          {" "}
          @2026 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import img_1 from "../../assets/logo.png";
import { BiDollar } from "react-icons/bi";
const Header = ({ count }) => {
  return (
    <>
      <header className=" w-full bg-base-100/30 ">
        <div className="fixed top-0  w-full backdrop-blur-md z-50">
          <div className="container mx-auto lg:px-12 xl:px-0 flex items-center justify-between navbar py-4 my-2">
            <img className="w-[80px]" src={img_1} alt="main-benner" />

            <div className="flex gap-4 text-gray-800 items-center font-bold">
              <button className="btn btn-ghost">
                {" "}
                <a href="#">Home</a>
              </button>
              <button className="btn btn-ghost">
                <a href="#main">Fixture</a>
              </button>
              <button className="btn btn-ghost">
                <a href="#available">Team</a>
              </button>
              <button className="btn btn-ghost">
                <a href="#halfFooter">Schedules</a>
              </button>
              <button className="btn font-bold rounded-lg flex items-center border border-gray-300 px-2 py-1">
                Coin {count}
                <BiDollar className="text-green-500 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

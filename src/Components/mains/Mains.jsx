import { useState } from "react";
import img_2 from "../../assets/banner-main.png";
import img_3 from "../../assets/bg-shadow.png";
import { AdoptToast } from "../Headers/AdoptToast";

const Mains = ({ handleAddCount }) => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      id="main"
      className="md:w-[95%] lg:w-[90%] md:container mx-auto bg-no-repeat bg-cover bg-center bg-black rounded-lg mb-8 mt-32 p-4 "
      style={{ backgroundImage: `url(${img_3})` }}
    >
      <div className=" my-8 space-y-5 ">
        <img className="bg-center w-52 h-52 mx-auto" src={img_2} alt="" />
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-bold text-4xl text-white">
            {" "}
            Assemble Your Ultimate Dream 11 Cricket Team
          </h3>
          <p className="text-xl text-gray-300 font-bold">
            Beyond Baundaries Beyond Limits
          </p>
          <div>
            <AdoptToast
              show={showToast}
              onClose={() => setShowToast(false)}
            ></AdoptToast>
            <button
              onClick={() => {
                handleAddCount();
                setShowToast(true);
              }}
              className=" border border-[#E7FE29] rounded-lg p-2 "
            >
              {" "}
              <div className="px-4 py-2 rounded-lg bg-[#E7FE29]">
                Claim Free Credit
              </div>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// Mains.propTypes = {
//   handleAddCount: PropTypes.func
// };

export default Mains;

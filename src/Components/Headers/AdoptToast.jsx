import { useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

const AdoptToast = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); // important
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-lg w-[320px] z-50">
      <div className="flex  p-2">
        <div className="flex gap-3 items-center p-2">
          {" "}
          <MdCheckCircle className="text-green-500 text-3xl" />
          <p className="font-medium">Adoption Process Started Successfully .</p>
        </div>
        <MdClose
          onClick={onClose}
          className="text-red-500 text-3xl cursor-pointer"
        />
      </div>
      {/* progress line */}
      <div className="h-1 bg-gray-200 overflow-hidden rounded-b-lg">
        <div className="h-full bg-green-500 animate-progress"></div>
      </div>
    </div>
  );
};
////////////////////
//
const AdoptToastss = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); // important
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-lg w-[320px] z-50">
      <div className="flex  p-2">
        <div className="flex gap-3 items-center p-2">
          {" "}
          <MdWarning className="text-yellow-500 text-4xl" />
          <p className="font-medium">
            No enough money to buy this player. Clime some credit
          </p>
        </div>
        <MdClose
          onClick={onClose}
          className="text-red-500 text-4xl cursor-pointer"
        />
      </div>
      {/* progress line */}
      <div className="h-1 bg-gray-200 overflow-hidden rounded-b-lg">
        <div className="h-full bg-yellow-500 animate-progress"></div>
      </div>
    </div>
  );
};
/////////////////
//
const AdoptToast_2 = ({ show, onClose, playerName }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); // important
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-lg w-[320px] z-50">
      <div className="flex  p-2">
        <div className="flex gap-3 items-center p-2">
          {" "}
          <MdCheckCircle className="text-green-500 text-3xl" />
          <p className="font-medium">
            Congrates ! <span className="font-bold">{playerName}</span> is now
            in your squad .
          </p>
        </div>
        <MdClose
          onClick={onClose}
          className="text-red-500 text-3xl cursor-pointer"
        />
      </div>
      {/* progress line */}
      <div className="h-1 bg-gray-200 overflow-hidden rounded-b-lg">
        <div className="h-full bg-green-500 animate-progress"></div>
      </div>
    </div>
  );
};
////////////////
const AdoptToast_3 = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); // important
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-lg w-[320px] z-50">
      <div className="flex gap-10 p-2">
        <div className="flex gap-3 items-center p-2">
          {" "}
          <RiErrorWarningFill className="text-red-600 text-2xl" />
          <p className="font-medium">Player already selected </p>
        </div>
        <MdClose
          onClick={onClose}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>
      {/* progress line */}
      <div className="h-1 bg-gray-200 overflow-hidden rounded-b-lg">
        <div className="h-full bg-red-500 animate-progress"></div>
      </div>
    </div>
  );
};
//////////////////////////
const AdoptToast_4 = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 1000);
    return () => clearTimeout(timer); // important
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed top-6 right-1 -translate-x-1/8 bg-white shadow-lg border rounded-lg w-[280px] z-50">
      <div className="flex gap-16 p-2">
        <div className="flex gap-2 items-center p-2">
          {" "}
          <MdWarning className="text-yellow-500 text-2xl" />
          <p className="font-medium">Player Removed </p>
        </div>
        <MdClose
          onClick={onClose}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>
      {/* progress line */}
      <div className="h-1 bg-gray-200 overflow-hidden rounded-b-lg">
        <div className="h-full bg-yellow-500 animate-progresss"></div>
      </div>
    </div>
  );
};

export { AdoptToast, AdoptToastss, AdoptToast_2, AdoptToast_3, AdoptToast_4 };

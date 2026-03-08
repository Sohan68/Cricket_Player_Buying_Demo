import { useState } from "react";

import "./App.css";
import { Player_SelectedList } from "./Components/Available_sec/Available";
import Footer from "./Components/Footer/Footer";
import HalfFooter from "./Components/HalfFooter/HalfFooter";
import Header from "./Components/Headers/Header";
import Mains from "./Components/mains/Mains";
import {
  AdoptToast_2,
  AdoptToast_3,
  AdoptToast_4,
  AdoptToastss,
} from "./Components/Headers/AdoptToast";
function App() {
  const [count, setCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [showToast_2, setshowToast_2] = useState(false);
  const [showToast_3, setshowToast_3] = useState(false);
  const [showToast_4, setshowToast_4] = useState(false);
  const [toastPlayer, setToastPlayer] = useState("");

  const handleAddCount = () => {
    setCount((prevCount) => prevCount + 500000);
  };
  const handleRemoveCount = (playerPrice) => {
    setCount((prev) => {
      if (prev < playerPrice) {
        return prev; // coin kom hole minus hobe na
      }
      return prev - playerPrice;
    });
  };

  return (
    <div className="relative">
      <Header count={count}></Header>
      {showToast && (
        <AdoptToastss show={showToast} onClose={() => setShowToast(false)} />
      )}
      {showToast_2 && (
        <AdoptToast_2
          show={showToast_2}
          playerName={toastPlayer}
          onClose={() => setshowToast_2(false)}
        />
      )}
      <AdoptToast_3
        show={showToast_3}
        onClose={() => setshowToast_3(false)}
      ></AdoptToast_3>
      <AdoptToast_4
        show={showToast_4}
        onClose={() => setshowToast_4(false)}
      ></AdoptToast_4>
      <Mains handleAddCount={handleAddCount}></Mains>
      <Player_SelectedList
        handleRemoveCount={handleRemoveCount}
        count={count}
        setShowToast={setShowToast}
        setshowToast_2={setshowToast_2}
        setshowToast_3={setshowToast_3}
        setshowToast_4={setshowToast_4}
        setToastPlayer={setToastPlayer}
      ></Player_SelectedList>
      <HalfFooter></HalfFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;

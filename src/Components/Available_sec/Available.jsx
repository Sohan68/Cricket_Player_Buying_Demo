import { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import Selected from "./Selected";

const Available = ({
  handleAvailable,
  handleSelection,
  showAvailable,
  selectedPlayers,
}) => {
  return (
    <div className="md:w-[95%] lg:w-[90%] py-4 md:container mx-auto">
      {/* sticky top-32 z-20 backdrop-blur-sm
        // just btn gulake stiky korte chassi but hocche na, korle puru div e korte hocche kno */}
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold text-2xl">Available Players </h1>
        <div className="  border border-gray-200 rounded-lg ">
          <button
            onClick={handleAvailable}
            className={`p-2 font-bold ${
              showAvailable ? "bg-[#E7FE29] rounded-md" : "text-gray-500"
            }`}
          >
            {" "}
            Available
          </button>
          <button
            onClick={handleSelection}
            className={`p-2 font-bold ${
              !showAvailable ? "bg-[#E7FE29] rounded-md" : "text-gray-500"
            }`}
          >
            {" "}
            Selection ({selectedPlayers.length})
          </button>
        </div>
      </div>
    </div>
  );
};

const Player_SelectedList = ({
  handleRemoveCount,
  count,
  setShowToast,
  setshowToast_2,
  setshowToast_3,
  setshowToast_4,
  setToastPlayer,
}) => {
  const [players, setPlayer] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);
  useEffect(() => {
    fetch("Players.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);
  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setshowToast_3(true);
      return;
    }
    // max 6 player check
    if (selectedPlayers.length >= 6) {
      alert("Maximum 6 players allowed");
      return;
    }
    if (count < player.price) {
      setShowToast(true);
      return;
    } else {
      setToastPlayer(player.name);
      setshowToast_2(true);
    }
    setSelectedPlayers((selectedPlayers) => [...selectedPlayers, player]);
    handleRemoveCount(player.price); // ei line akhane na dile er porer component gula
    // te handleRemoveCount(handleRemoveCount) ei props pathate hoto .
  };
  const handleAvailable = () => {
    setShowAvailable(true);
  };
  const handleSelection = () => {
    setShowAvailable(false);
  };
  const handleDeletePlayer = (id) => {
    setshowToast_4(true);
    const remainingPlayer = selectedPlayers.filter(
      (player) => player.id !== id,
    );
    setSelectedPlayers(remainingPlayer);
  };
  const handleShowAvailable = () => {
    setShowAvailable(true);
  };
  return (
    <div id="available">
      <Available
        handleAvailable={handleAvailable}
        handleSelection={handleSelection}
        showAvailable={showAvailable}
        selectedPlayers={selectedPlayers}
      ></Available>
      {showAvailable ? (
        <PlayerList
          players={players}
          handleSelectPlayer={handleSelectPlayer}
        ></PlayerList>
      ) : (
        <Selected
          selectedPlayers={selectedPlayers}
          handleDeletePlayer={handleDeletePlayer}
          handleShowAvailable={handleShowAvailable}
        ></Selected>
      )}
    </div>
  );
};

export { Player_SelectedList };

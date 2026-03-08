import { MdDelete } from "react-icons/md";
const Selected = ({
  selectedPlayers,
  handleShowAvailable,
  handleDeletePlayer,
}) => {
  return (
    <div className=" container w-[80%] mx-auto min-h-96 pb-64">
      {" "}
      <h1 className=" font-bold text-2xl py-4">
        Selected Players ({selectedPlayers.length}/6)
      </h1>
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className=" container bg-gray-200 p-4 rounded-lg shadow-lg mx-auto flex justify-between items-center my-4 gap-4"
        >
          <div className="flex gap-4 ">
            <img className=" rounded-full" src={player.image} width="50" />
            <div className="">
              <p className=" font-bold text-lg">{player.name}</p>
              <div className="flex gap-8">
                <p>Batting : {player.batting_style}</p>
                <p> Bowling : {player.bowling_style}</p>
              </div>
            </div>{" "}
          </div>
          <div>
            <MdDelete
              onClick={() => handleDeletePlayer(player.id)}
              className="text-red-500 text-2xl cursor-pointer"
            />
          </div>
        </div>
      ))}
      <button
        onClick={handleShowAvailable}
        className=" border border-gray-500 p-1 rounded-md"
      >
        <div className="btn bg-[#E7FE29] p-2 rounded-sm"> Add More Players</div>
      </button>
    </div>
  );
};
export default Selected;

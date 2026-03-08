import Player from "./Player";

const PlayerList = ({ players, handleSelectPlayer }) => {
  return (
    <div className="md:w-[95%] lg:w-[90%] xl:w-[80%] md:container grid grid-cols-3 mx-auto gap-4 xl:gap-6 my-4 pb-52">
      {players.map((players) => (
        <Player
          player={players}
          key={players.id}
          handleSelectPlayer={handleSelectPlayer}
        ></Player>
      ))}
    </div>
  );
};
export default PlayerList;

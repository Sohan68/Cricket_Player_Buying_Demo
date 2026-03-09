const Player = ({ player, handleSelectPlayer }) => {
  const {
    name,
    country,
    role,
    batting_style,
    bowling_style,
    price,
    rating,
    image,
    personIcon,
    flag,
  } = player;
  return (
    <div className="border border-gray-300 rounded-lg p-4 xl:p-6  ">
      <div className="w-full object-fill">
        <img
          className=" rounded-md w-full md:h-40 lg:h-60 object-fill "
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center mt-3">
        <img src={personIcon} className="w-6 h-6" alt="" />
        <h2 className="font-bold text-xl pl-4">{name}</h2>
      </div>
      <div className="lg:flex justify-between items-center  pl-1 py-3">
        <div className="flex items-center gap-1">
          {" "}
          <img src={flag} alt="flag" className="w-5 h-4" />
          {""}
          <p className=" text-xl">{country}</p>
        </div>
        <div className=" bg-gray-100 lg:py-2 lg:px-1 xl:p-2 rounded-md">
          {role}
        </div>
      </div>
      <hr className="py-1"></hr>
      <div className="py-1">
        {" "}
        <p className=" font-bold">⭐ Rating : {rating}</p>{" "}
      </div>
      <div className="flex justify-between items-center py-1">
        <p className=" font-bold">{batting_style} </p>
        <p className="pl-6">{bowling_style}</p>{" "}
      </div>
      <div className="flex justify-between items-center py-1">
        {" "}
        <p className=" font-bold "> Price : {price} $</p>
        <div
          onClick={() => {
            handleSelectPlayer(player);
          }}
          className="btn border border-gray-200 rounded-md py-1 px-2 "
        >
          Chose Player
        </div>
      </div>
    </div>
  );
};

export default Player;

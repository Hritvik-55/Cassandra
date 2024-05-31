/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute mt-36 text-white ">
      <h1 className="text-3xl font-bold m-4 mx-8 mt-20 px-20">{title}</h1>
      <p className="w-1/3 m-4 mx-8  px-20 text-lg font-semibold">{overview}</p>
      <div className="m-4 mx-8 px-20">
        <button className=" bg-white text-black px-10 py-2 rounded-lg font-medium hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="mx-4 bg-gray-300 text-white px-10 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-15">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

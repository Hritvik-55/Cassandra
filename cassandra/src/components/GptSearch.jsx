import { LOGIN_BG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <div className="h-screen w-screen overflow-hidden absolute">
        <img className="object-cover w-full h-full" src={LOGIN_BG} />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;

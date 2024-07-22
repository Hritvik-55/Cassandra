import { LOGIN_BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <div className="h-screen w-screen fixed overflow-hidden">
        <img className="object-cover w-full h-full bg-cover" src={LOGIN_BG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

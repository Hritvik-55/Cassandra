import { useSelector } from "react-redux";
import { lang } from "../utils/constants";
import { useRef } from "react";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearch = () => {
    console.log(searchText.current.value);
  };
  return (
    <div className="absolute z-30 mt-[15%] w-full flex justify-center">
      <form
        className="w-[45rem] bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="col-span-3 bg-red-700 text-white rounded-lg m-4 py-2 px-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

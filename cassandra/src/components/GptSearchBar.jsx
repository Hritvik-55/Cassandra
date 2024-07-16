import { useSelector } from "react-redux";
import { GOOGLE_KEY, lang } from "../utils/constants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GOOGLE_KEY);
  const handleGptSearch = async () => {
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Dhmaal,Golmal,Sholay,Don,Argylle";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const recommendedMovies = text.split(",");
    console.log(recommendedMovies);
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

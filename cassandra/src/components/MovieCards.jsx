/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-80 h-48">
      <img
        className="object-cover w-full h-full"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCards;

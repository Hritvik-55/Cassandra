/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-56 h-28 pr-2">
      <img
        className="w-full h-full object-cover rounded-md overflow-hidden"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCards;

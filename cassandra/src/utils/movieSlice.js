import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { nowPlayingMovies: null },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlaying } = movieSlice.actions;
export default movieSlice.reducer;

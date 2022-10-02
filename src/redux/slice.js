import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'like',
  initialState: {
    likedMovies: [],
  },
  reducers: {
    setLiked: (state, action) => {
      state.likedMovies = action.payload;
    },
    liked: (state, action) => {
      state.likedMovies.push(action.payload);
    },
    unLiked: (state, action) => {
      state.likedMovies = state.likedMovies.filter(
        item => item !== action.payload,
      );
    },
  },
});

export const {setLiked, liked, unLiked} = slice.actions;

export default slice.reducer;

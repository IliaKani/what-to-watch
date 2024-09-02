import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../../types/film';
import { ALL_GENRES, NameSpace } from '../../const';

const FILMS_ON_FIRST_LOAD = 8;
const FILMS_ON_SHOW_MORE_CLICK = 8;

const initialState = {
  activeGenre: ALL_GENRES,
  filmsCountOnPage: FILMS_ON_FIRST_LOAD,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setGenreAction: (state, action: PayloadAction<TFilm['genre']>) => {
      state.activeGenre = action.payload;
    },
    resetGenreAction: (state) => {
      state.activeGenre = ALL_GENRES;
    },
    showMoreFilmsAction: (state) => {
      state.filmsCountOnPage =
        state.filmsCountOnPage + FILMS_ON_SHOW_MORE_CLICK;
    },
    resetFilmsAction: (state) => {
      state.filmsCountOnPage = FILMS_ON_FIRST_LOAD;
    },
  },
});

export const {
  setGenreAction,
  resetGenreAction,
  showMoreFilmsAction,
  resetFilmsAction,
} = mainProcess.actions;

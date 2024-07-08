import {createReducer} from '@reduxjs/toolkit';
import {fetchFilms, setGenre, increaseCounter, resetCounter} from './action';
import {Genres} from '../const';
import {Film} from '../types/film';

type State = {
  activeGenre: string;
  films: Film[];
  isFilmsLoading: boolean;
  counter: number;
};

const initialState: State = {
  activeGenre: Genres.AllGenres,
  isFilmsLoading: false,
  films: [],
  counter: 1,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(fetchFilms.pending, (state, action) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchFilms.rejected, (state, action) => {
      state.isFilmsLoading = false;
    })
    .addCase(increaseCounter, (state, action) => {
      state.counter += 1;
    })
    .addCase(resetCounter, (state, action) => {
      state.counter = 1;
    });
});

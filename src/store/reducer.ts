import {createReducer} from '@reduxjs/toolkit';
import {setFilms ,setGenre} from './action';
import {Genres} from '../const';
import {Film} from '../types/film';

type State = {
  activeGenre: string;
  films: Film[];
}

const initialState: State = {
  activeGenre: Genres.AllGenres,
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});

import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const Action = {
  SET_GENRE: 'genre/set',
  SET_FILMS: 'films/set'
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const setFilms = createAction<Film[]>(Action.SET_FILMS);

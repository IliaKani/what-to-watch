import type { AxiosInstance } from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppRoute} from '../const';

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS: 'films/fetch',
  INCREASE_COUNTER: 'counter/increase',
  RESET_COUNTER: 'counter/reset',
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const increaseCounter = createAction(Action.INCREASE_COUNTER);
export const resetCounter = createAction(Action.RESET_COUNTER);

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(AppRoute.Film);

    return data;
  });

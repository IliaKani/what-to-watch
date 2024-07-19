import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../../const';
import {Action} from '../action';

export const fetchFilms = createAsyncThunk<Film[], void, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(AppRoute.Film);

    return data;
  });

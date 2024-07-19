import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../../const';
import {Action} from '../action';

export const fetchSimilarFilms = createAsyncThunk<Film[], Film['id'], { extra: AxiosInstance }>(
  Action.FETCH_SIMILAR_FILMS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${AppRoute.Film}/${id}${AppRoute.Similar}`);

    return data;
  });

import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../../const';
import {Action} from '../action';


export const fetchFilm = createAsyncThunk<Film, Film['id'], { extra: AxiosInstance }>(
  Action.FETCH_FILM,
  async (id, { extra: api }) => {
    const { data } = await api.get<Film>(`${AppRoute.Film}/${id}`);

    return data;
  });

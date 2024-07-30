import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../../types/film';
import {AxiosInstance} from 'axios';
import {AppRoute, FavoriteStatus} from '../../const';
import {Action} from '../action';

type FavoriteProps = {
  id: number;
  status: FavoriteStatus;
};

type ChangeResponse = {
  film: Film;
  status: FavoriteStatus;
}

export const fetchFavorite = createAsyncThunk<Film[], void, { extra: AxiosInstance }>(
  Action.FETCH_FAVORITE,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(AppRoute.Favorite);

    return data;
  });

export const changeFavoriteStatus = createAsyncThunk<ChangeResponse, FavoriteProps, { extra: AxiosInstance }>(
  Action.POST_FAVORITE,
  async ({id, status}, { extra: api }) => {
    const { data } = await api.post<Film>(`${AppRoute.Favorite}/${id}/${status}`);

    return {film: data, status};
  });


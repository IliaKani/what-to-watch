import type { AxiosInstance } from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppRoute} from '../const';
import {FetchUser} from '../types/fetch-user';
import {AuthData} from '../types/auth-data';
import {saveToken, dropToken} from '../services/token';

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS: 'films/fetch',
  INCREASE_COUNTER: 'counter/increase',
  RESET_COUNTER: 'counter/reset',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
};

export const setGenre = createAction<string>(Action.SET_GENRE);
export const increaseCounter = createAction(Action.INCREASE_COUNTER);
export const resetCounter = createAction(Action.RESET_COUNTER);

export const fetchFilms = createAsyncThunk<Film[], void, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>(AppRoute.Film);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<FetchUser, void, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<FetchUser>(AppRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<FetchUser, AuthData, { extra: AxiosInstance }>(
  Action.LOGIN_USER,
  async ({email, password}, { extra: api }) => {
    const { data } = await api.post<FetchUser>(AppRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  });

export const logoutUser = createAsyncThunk<void, void, { extra: AxiosInstance }>(
  Action.LOGOUT_USER,
  async (_, { extra: api }) => {
    await api.delete(AppRoute.Logout);
    dropToken();
  });


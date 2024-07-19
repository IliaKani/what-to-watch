import {createAsyncThunk} from '@reduxjs/toolkit';
import {FetchUser} from '../../types/fetch-user';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../../const';
import {AuthData} from '../../types/auth-data';
import {dropToken, saveToken} from '../../services/token';
import {Action} from '../action';

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

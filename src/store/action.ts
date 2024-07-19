import type { AxiosInstance } from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {Comment} from '../types/comment';
import {AppRoute} from '../const';
import {FetchUser} from '../types/fetch-user';
import {AuthData} from '../types/auth-data';
import {saveToken, dropToken} from '../services/token';
import {CommentData} from '../types/comment-data';

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS: 'films/fetch',
  FETCH_SIMILAR_FILMS: 'films/fetch-similar',
  FETCH_COMMENTS: 'films/fetch-comments',
  FETCH_FILM: 'film/fetch',
  INCREASE_COUNTER: 'counter/increase',
  RESET_COUNTER: 'counter/reset',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  POST_COMMENT: 'film/post-comment',
};
//
// export const setGenre = createAction<string>(Action.SET_GENRE);
// export const increaseCounter = createAction(Action.INCREASE_COUNTER);
// export const resetCounter = createAction(Action.RESET_COUNTER);

// export const fetchFilms = createAsyncThunk<Film[], void, { extra: AxiosInstance }>(
//   Action.FETCH_FILMS,
//   async (_, { extra: api }) => {
//     const { data } = await api.get<Film[]>(AppRoute.Film);
//
//     return data;
//   });

// export const fetchUserStatus = createAsyncThunk<FetchUser, void, { extra: AxiosInstance }>(
//   Action.FETCH_USER_STATUS,
//   async (_, { extra: api }) => {
//     const { data } = await api.get<FetchUser>(AppRoute.Login);
//
//     return data;
//   });
//
// export const loginUser = createAsyncThunk<FetchUser, AuthData, { extra: AxiosInstance }>(
//   Action.LOGIN_USER,
//   async ({email, password}, { extra: api }) => {
//     const { data } = await api.post<FetchUser>(AppRoute.Login, {email, password});
//     saveToken(data.token);
//     return data;
//   });
//
// export const logoutUser = createAsyncThunk<void, void, { extra: AxiosInstance }>(
//   Action.LOGOUT_USER,
//   async (_, { extra: api }) => {
//     await api.delete(AppRoute.Logout);
//     dropToken();
//   });

// export const fetchFilm = createAsyncThunk<Film, Film['id'], { extra: AxiosInstance }>(
//   Action.FETCH_FILM,
//   async (id, { extra: api }) => {
//     const { data } = await api.get<Film>(`${AppRoute.Film}/${id}`);
//
//     return data;
//   });

// export const fetchComments = createAsyncThunk<Comment[], Film['id'], { extra: AxiosInstance }>(
//   Action.FETCH_COMMENTS,
//   async (id, { extra: api }) => {
//     const { data } = await api.get<Comment[]>(`${AppRoute.Comments}/${id}`);
//
//     return data;
//   });

// export const fetchSimilarFilms = createAsyncThunk<Film[], Film['id'], { extra: AxiosInstance }>(
//   Action.FETCH_SIMILAR_FILMS,
//   async (id, { extra: api }) => {
//     const { data } = await api.get<Film[]>(`${AppRoute.Film}/${id}${AppRoute.Similar}`);
//
//     return data;
//   });

// export const postComment = createAsyncThunk<Comment[], CommentData, { extra: AxiosInstance }>(
//   Action.POST_COMMENT,
//   async ({id, comment, rating}, { extra: api }) => {
//     const { data } = await api.post<Comment[]>(`${AppRoute.Comments}/${id}`, {comment, rating});
//
//     return data;
//   });
//

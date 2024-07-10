import {createReducer} from '@reduxjs/toolkit';
import {fetchFilms, fetchUserStatus, increaseCounter, resetCounter, setGenre, loginUser, logoutUser} from './action';
import {AuthorizationStatus, Genres} from '../const';
import {Film} from '../types/film';
import {FetchUser} from '../types/fetch-user';

type State = {
  activeGenre: string;
  films: Film[];
  isFilmsLoading: boolean;
  counter: number;
  authorizationStatus: AuthorizationStatus;
  user: FetchUser['avatarUrl'];
};

const initialState: State = {
  activeGenre: Genres.AllGenres,
  isFilmsLoading: false,
  films: [],
  counter: 1,
  user: '',
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(fetchFilms.pending, (state, action) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchFilms.rejected, (state, action) => {
      state.isFilmsLoading = false;
    })
    .addCase(increaseCounter, (state, action) => {
      state.counter += 1;
    })
    .addCase(resetCounter, (state, action) => {
      state.counter = 1;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload?.avatarUrl;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload?.avatarUrl;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(logoutUser.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = '';
    });
});

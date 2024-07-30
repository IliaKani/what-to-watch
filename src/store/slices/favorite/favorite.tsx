import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../../types/film';
import {FavoriteStatus, RequestsStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {changeFavoriteStatus, fetchFavorite} from '../../thunks/favorite';

export type FavoriteData = {
  films: Film[];
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: FavoriteData = {
  films: [],
  status: RequestsStatus.Idle,
  hasError: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.films = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchFavorite.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.status = RequestsStatus.Loading;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.films.push(action.payload.film);
            break;
          case FavoriteStatus.Removed:
            state.films = state.films.filter((film) => film.id !== action.payload.film.id);
            break;
        }
        state.status = RequestsStatus.Success;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.hasError = true;
      });
  }
});

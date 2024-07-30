import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Genres, NameSpace, RequestsStatus} from '../../../const';
import {Film} from '../../../types/film';
import {fetchPromoFilm} from '../../thunks/promo';

export type SiteProcessData = {
  activeGenre: string;
  promo: Film | null;
  counter: number;
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: SiteProcessData = {
  activeGenre: Genres.AllGenres,
  status: RequestsStatus.Idle,
  hasError: false,
  promo: null,
  counter: 1,
};

const siteProcess = createSlice({
  name: NameSpace.SiteProcess,
  initialState,
  reducers: {
    setGenre (state: SiteProcessData, action: PayloadAction<string>) {
      state.activeGenre = action.payload;
    },
    increaseCounter (state: SiteProcessData) {
      state.counter += 1;
    },
    resetCounter (state: SiteProcessData) {
      state.counter = 1;
    },
    updatePromo (state: SiteProcessData, action: PayloadAction<number | null>) {
      if (state?.promo?.id === action.payload) {
        state.promo.isFavorite = !state.promo.isFavorite;
      }
    },
    clearPromoFavoriteStatus (state: SiteProcessData) {
      if (state.promo) {
        state.promo.isFavorite = false;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilm.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      });
  }
});

export const { setGenre, increaseCounter, resetCounter, updatePromo, clearPromoFavoriteStatus } = siteProcess.actions;
export {siteProcess};

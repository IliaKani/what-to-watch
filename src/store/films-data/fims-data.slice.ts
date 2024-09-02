import { createSlice } from '@reduxjs/toolkit';
import {
  addReviewAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchMyListAction,
  fetchPromoFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction,
} from '../api-actions';
import { TFilmsData } from '../../types/state';
import { NameSpace, RequestStatus } from '../../const';

const initialState: TFilmsData = {
  film: null,
  films: [],
  similarFilms: [],
  promoFilm: null,
  myList: [],
  reviews: [],
  filmFetchingStatus: RequestStatus.Idle,
  filmsFetchingStatus: RequestStatus.Idle,
  similarFilmsFetchingStatus: RequestStatus.Idle,
  promoFilmFetchingStatus: RequestStatus.Idle,
  myListFetchingStatus: RequestStatus.Idle,
  reviewsFetchingStatus: RequestStatus.Idle,
  addReviewFetchingStatus: RequestStatus.Idle,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    clearAddReviewFetchingStatus: (state) => {
      state.addReviewFetchingStatus = RequestStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.filmsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.filmsFetchingStatus = RequestStatus.Success;
        state.films = action.payload;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.filmsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.filmFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.filmFetchingStatus = RequestStatus.Success;
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.filmFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.similarFilmsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilmsFetchingStatus = RequestStatus.Success;
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilmsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.promoFilmFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilmFetchingStatus = RequestStatus.Success;
        state.promoFilm = action.payload;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.promoFilmFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchMyListAction.pending, (state) => {
        state.myListFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchMyListAction.fulfilled, (state, action) => {
        state.myListFetchingStatus = RequestStatus.Success;
        state.myList = action.payload;
      })
      .addCase(fetchMyListAction.rejected, (state) => {
        state.myListFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviewsFetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.addReviewFetchingStatus = RequestStatus.Pending;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.addReviewFetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.addReviewFetchingStatus = RequestStatus.Rejected;
      });
  },
});

export const { clearAddReviewFetchingStatus } = filmsData.actions;

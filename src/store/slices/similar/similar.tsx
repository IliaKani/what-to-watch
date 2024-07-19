import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../../types/film';
import {RequestsStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {fetchSimilarFilms} from '../../thunks/similar';

export type SimilarFilmsData = {
  films: Film[];
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: SimilarFilmsData = {
  films: [],
  status: RequestsStatus.Idle,
  hasError: false,
};

export const similarFilmsData = createSlice({
  name: NameSpace.Similar,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      });
  }
});

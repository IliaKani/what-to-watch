import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../../../types/film';
import {RequestsStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {fetchFilms} from '../../thunks/films';

type FilmsData = {
  films: Film[];
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: FilmsData = {
  films: [],
  status: RequestsStatus.Idle,
  hasError: false,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      });
  }
});

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Genres, NameSpace} from '../../../const';

export type SiteProcessData = {
  activeGenre: string;
  counter: number;
};

const initialState: SiteProcessData = {
  activeGenre: Genres.AllGenres,
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
  },
});

export const { setGenre, increaseCounter, resetCounter } = siteProcess.actions;
export {siteProcess};

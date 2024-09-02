import { combineReducers } from '@reduxjs/toolkit';
import { filmsData } from './films-data/fims-data.slice';
import { mainProcess } from './main-process/main-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

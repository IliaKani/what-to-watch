import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';

import {siteProcess} from './slices/site-process/site-process';
import {userProcess} from './slices/user/user';
import {similarFilmsData} from './slices/similar/similar';
import {filmsData} from './slices/films/films';
import {filmData} from './slices/film/film';
import {commentsData} from './slices/comments/comments';

export const rootReducer = combineReducers({
  [NameSpace.SiteProcess]: siteProcess.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Similar]: similarFilmsData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});

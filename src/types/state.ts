import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store/index';
import { TFilm } from './film';
import { TFilms } from './films';
import { TReviews } from './reviews';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type TFilmsData = {
  films: TFilms[];
  film: TFilm | null;
  similarFilms: TFilms[];
  promoFilm: TFilm | null;
  myList: TFilms[];
  reviews: TReviews;
  filmFetchingStatus: RequestStatus;
  filmsFetchingStatus: RequestStatus;
  similarFilmsFetchingStatus: RequestStatus;
  promoFilmFetchingStatus: RequestStatus;
  myListFetchingStatus: RequestStatus;
  reviewsFetchingStatus: RequestStatus;
  addReviewFetchingStatus: RequestStatus;
};

export type TMainProcess = {
  genres: TFilm['genre'];
  filmsCountOnPage: number;
};

export type TUserProcess = {
  user: TUser | null;
  authorizationStatus: AuthorizationStatus;
  loginFetchingStatus: RequestStatus;
};

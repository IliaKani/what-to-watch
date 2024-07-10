export enum AppRoute {
  Root = '/',
  Login = '/login',
  Logout = '/logout',
  MyList = '/mylist',
  Film = '/films',
  Review = '/review',
  Player = '/player',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum ButtonsType {
  Play = 'play',
  MyList = 'my-list',
  AddReview = 'add-review'
}

export const REVIEW_MAX_LENGTH = 400;
export const REVIEW_MIN_LENGTH = 50;
export const MIN_RATING = 0;
export const PREVIEW_TIMEOUT = 1000;
export const CARDS_PER_VIEW = 8;

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const DEFAULT_CHECKED_INDEX = 4;
export const TABS = ['Overview', 'Details', 'Reviews'];
export const enum RequestsStatus {Idle, Loading, Success, Failed}

export enum RatingStatus {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum Genres {
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
  AllGenres = 'All genres',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Logout = '/logout',
  MyList = '/mylist',
  Favorite = '/favorite',
  Film = '/films',
  Review = '/review',
  Comments = '/comments',
  Player = '/player',
  Similar = '/similar',
  Promo = '/promo',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  SiteProcess = 'SITE_PROCESS',
  Comments = 'COMMENTS',
  Favorite = 'FAVORITE',
  Films = 'FILMS',
  Film = 'FILM',
  Similar = 'SIMILAR',
  User = 'USER',
}

export enum ButtonsType {
  Play = 'play',
  MyList = 'my-list',
  AddReview = 'add-review'
}

export const ERROR_MESSAGES = {
  LOGIN_IS_EMPTY: 'поле не может быть пустым',
  WRONG_EMAIL_VALUE: 'введен некорректный эмейл',
  WRONG_PASSWORD_VALUE: 'пароль должен содержать буквы и цифры',
};

export const MAX_PROGRESS_COUNT = 100;
export const SECONDS_IN_HOUR = 3600;
export const MIN_TIME_LIMIT = 10;
export const TIMEOUT_LIMIT = 1000;
export const REVIEW_MAX_LENGTH = 400;
export const REVIEW_MIN_LENGTH = 50;
export const MIN_RATING = 0;
export const PREVIEW_TIMEOUT = 1000;
export const CARDS_PER_VIEW = 8;

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const DEFAULT_CHECKED_INDEX = 4;
export const MAX_SIMILAR_FILMS = 4;
export const TABS = ['Overview', 'Details', 'Reviews'];
export const enum RequestsStatus {Idle, Loading, Success, Failed}
export const enum FavoriteStatus { Removed, Added }

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

export enum AppRoute {
  Root = '/',
  Login = '/login',
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

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const DEFAULT_CHECKED_INDEX = 4;

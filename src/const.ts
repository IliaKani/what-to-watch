export const MAX_GENRES_COUNT = 9;

export const ALL_GENRES = 'All genres';

export const PROMO_NOT_FOUND_MOCK =
  'https://13.design.htmlacademy.pro/static/film/background/Macbeth.jpg';

export enum CommentLength {
  Min = 50,
  Max = 400,
}

export enum SimilarFilmsCount {
  Min = 0,
  Max = 4,
}

export const LOGO_HEADER = 'logo__link';
export const LOGO_FOOTER = 'logo__link logo__link--light';

export enum NameSpace {
  Films = 'FILMS',
  Main = 'MAIN',
  User = 'USER',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = 'films/:id/review',
  Player = '/player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Films = '/films',
  Similar = '/similar',
  MyList = '/favorite',
  Reviews = '/comments',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Rejected = 'Rejected',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const ratingMap = {
  '10': 'awesome',
  '9': 'very good',
  '8': 'very good',
  '7': 'good',
  '6': 'good',
  '5': 'good',
  '4': 'normal',
  '3': 'normal',
  '2': 'bad',
  '1': 'bad',
};

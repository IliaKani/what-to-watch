import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getActiveGenre = (state: State): string => state[NameSpace.SiteProcess].activeGenre;
export const getCounter = (state: State): number => state[NameSpace.SiteProcess].counter;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.SiteProcess].promo;
export const getPromoFilmStatus = (state: State): RequestsStatus => state[NameSpace.SiteProcess].status;
export const getPromoFilmError = (state: State): boolean => state[NameSpace.SiteProcess].hasError;

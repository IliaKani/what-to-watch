import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getFilmStatus = (state: State): RequestsStatus => state[NameSpace.Film].status;
export const getFilmErrorStatus = (state: State): boolean => state[NameSpace.Film].hasError;

import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Favorite].films;
export const getFavoriteFilmsStatus = (state: State): RequestsStatus => state[NameSpace.Favorite].status;

import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getFilms = (state: State): Film[] => state[NameSpace.Films].films;
export const getFilmsStatus = (state: State): RequestsStatus => state[NameSpace.Films].status;

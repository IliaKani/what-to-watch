import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getSimilar = (state: State): Film[] => state[NameSpace.Similar].films;
export const getSimilarStatus = (state: State): RequestsStatus => state[NameSpace.Similar].status;
export const getSimilarErrorStatus = (state: State): boolean => state[NameSpace.Similar].hasError;

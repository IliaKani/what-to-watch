import {NameSpace} from '../../../const';
import {State} from '../../../types/state';
import {Film} from '../../../types/film';

export const getSimilar = (state: State): Film[] => state[NameSpace.Similar].films;

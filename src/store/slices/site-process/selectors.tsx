import {NameSpace} from '../../../const';
import {State} from '../../../types/state';

export const getActiveGenre = (state: State): string => state[NameSpace.SiteProcess].activeGenre;
export const getCounter = (state: State): number => state[NameSpace.SiteProcess].counter;

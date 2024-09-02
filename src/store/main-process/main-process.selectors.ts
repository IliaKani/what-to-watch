import { TAppState, TMainProcess } from '../../types/state';
import { NameSpace } from '../../const';

export const getActiveGenre = (
  state: Pick<TAppState, NameSpace.Main>
): TMainProcess['genres'] => state[NameSpace.Main].activeGenre;

export const getFilmsCountOnPage = (
  state: Pick<TAppState, NameSpace.Main>
): TMainProcess['filmsCountOnPage'] => state[NameSpace.Main].filmsCountOnPage;

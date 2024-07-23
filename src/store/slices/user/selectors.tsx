import {NameSpace} from '../../../const';
import {State} from '../../../types/state';
import {AuthorizationStatus} from '../../../const';
import {FetchUser} from '../../../types/fetch-user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): FetchUser['avatarUrl'] | null => state[NameSpace.User].user;

import {NameSpace, RequestsStatus} from '../../../const';
import {State} from '../../../types/state';
import {Comment} from '../../../types/comment';

export const getComments = (state: State): Comment[] => state[NameSpace.Comments].comments;
export const getCommentsStatus = (state: State): RequestsStatus => state[NameSpace.Comments].status;

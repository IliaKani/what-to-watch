import { TFilm } from './film';

export type TMyList = {
  id: TFilm['id'];
} & TMyListStatus;

type TMyListStatus = {
  status: 0 | 1;
};

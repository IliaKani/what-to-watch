import { useEffect, useState } from 'react';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { TFilm } from '../../../types/film';
import { TFilms } from '../../../types/films';
import { AppRoute, AuthorizationStatus } from '../../../const';
import {
  changeMyListAction,
  fetchMyListAction,
} from '../../../store/api-actions';
import { TMyList } from '../../../types/my-list';
import { useNavigate } from 'react-router-dom';

type TMyListButtonProps = {
  id: TFilm['id'];
  isActive: TFilm['isFavorite'];
  myList: TFilms[];
};

export function MyListButton({
  id,
  isActive,
  myList,
}: TMyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthorized =
    useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const [isFavorite, setIsFavorite] = useState<boolean>(isActive);

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchMyListAction());
    }
  }, [dispatch, isAuthorized]);

  const handleMyListClick = () => {
    if (isAuthorized) {
      const changedFavoriteStatus = Number(!isFavorite) as TMyList['status'];
      setIsFavorite(!isFavorite);
      dispatch(changeMyListAction({ id, status: changedFavoriteStatus }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        {isAuthorized && isFavorite ? (
          <use xlinkHref="#in-list" />
        ) : (
          <use xlinkHref="#add" />
        )}
      </svg>
      <span>My list</span>
      {isAuthorized && (
        <span className="film-card__count">{myList.length}</span>
      )}
    </button>
  );
}

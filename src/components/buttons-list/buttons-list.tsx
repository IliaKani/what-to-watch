import {ButtonsType} from '../../const';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';
import {Add, Play, InList} from '../icons/icons';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/slices/user/selectors';
import {changeFavoriteStatus} from '../../store/thunks/favorite';
import {updatePromo} from '../../store/slices/site-process/site-process';
import {updateFilm} from '../../store/slices/film/film';

type ButtonListType = {
  id: number;
  hideButton?: ButtonsType;
  isFavorite: boolean;
}

export default function ButtonsList({id, hideButton, isFavorite}:ButtonListType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handlePlay = () => {
    navigate(`${AppRoute.Player}/${id}`);
  };

  const handleFavoriteChange = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(changeFavoriteStatus({id, status: Number(!isFavorite)}))
      .then(() => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          dispatch(updatePromo(id));
          dispatch(updateFilm(id));
        }
      });
  };

  const handleAddReview = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`${AppRoute.Film}/${id}${AppRoute.Review}`);
  };

  return (
    <div className="film-card__buttons">
      {
        hideButton !== ButtonsType.Play &&
          <button className="btn btn--play film-card__button" type="button" onClick={handlePlay}>
            <Play/>
            <span>Play</span>
          </button>
      }
      {
        hideButton !== ButtonsType.MyList &&
          <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteChange}>
            {isFavorite ? <InList/> : <Add/>}
            <span>My list</span>
          </button>
      }
      {
        authorizationStatus === AuthorizationStatus.Auth && hideButton !== ButtonsType.AddReview &&
          <a href="#" className="btn film-card__button" onClick={handleAddReview}>Add review</a>
      }
    </div>
  );
}

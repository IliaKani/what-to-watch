import {ButtonsType} from '../../const';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';
import {Add, Play} from '../icons/icons';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/slices/user/selectors';

type ButtonListType = {
  id: number;
  hideButton?: ButtonsType;
}

export default function ButtonsList({id, hideButton}:ButtonListType) {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handlePlay = () => {
    navigate(`${AppRoute.Player}/${id}`);
  };

  const handleList = () => {
    navigate(`${AppRoute.MyList}`);
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
          <button className="btn btn--list film-card__button" type="button" onClick={handleList}>
            <Add/>
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

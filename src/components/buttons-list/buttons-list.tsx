import {ButtonsType} from '../../const';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';

type ButtonListType = {
  id: number;
  hideButton?: ButtonsType;
}

export default function ButtonsList({id, hideButton}:ButtonListType) {
  const navigate = useNavigate();
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
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      }
      {
        hideButton !== ButtonsType.MyList &&
        <button className="btn btn--list film-card__button" type="button" onClick={handleList}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
      }
      {
        hideButton !== ButtonsType.AddReview &&
        <a href="#" className="btn film-card__button" onClick={handleAddReview}>Add review</a>
      }
    </div>
  );
}

import { Link } from 'react-router-dom';
import { TFilm } from '../../../types/film';
import { AppRoute } from '../../../const';

type TPlayButtonProps = {
  id: TFilm['id'];
};

export function PlayButton({ id }: TPlayButtonProps): JSX.Element {
  return (
    <Link
      to={`${AppRoute.Player}/${id}`}
      className="btn btn--play film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>
  );
}

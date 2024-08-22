import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { TFilms } from '../../types/films';
import {
  resetFilmsAction,
  setGenreAction,
} from '../../store/main-process/main-process.slice';
import { Link } from 'react-router-dom';

type TFilterGenreProps = {
  genres: TFilms['genre'][];
  activeGenre: TFilms['genre'];
};

export function FilterGenre({ genres, activeGenre }: TFilterGenreProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={classNames('catalog__genres-item', {
              'catalog__genres-item--active': activeGenre === genre,
            })}
          >
            <Link
              to="#"
              className="catalog__genres-link"
              onClick={() => {
                dispatch(resetFilmsAction());
                dispatch(setGenreAction(genre));
              }}
            >
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

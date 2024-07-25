import {useAppSelector, useAppDispatch} from '../../hooks';
import {setGenre, resetCounter} from '../../store/slices/site-process/site-process';
import {Genres} from '../../const';
import Genre from '../genre/genre';
import {getActiveGenre} from '../../store/slices/site-process/selectors';
import {getFilms} from '../../store/slices/films/selectors';

export default function GenreList() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);

  const handleClick = (name: string) => {
    dispatch(setGenre(name));
    dispatch(resetCounter());
  };

  const allGenres = [Genres.AllGenres, ...new Set(films.map((film) => film.genre))];

  return (
    <ul className="catalog__genres-list">
      {allGenres.slice(0, 8).map((genre) => (
        <Genre key={genre} name={genre} isActive={genre === activeGenre} onClick={handleClick} />
      ))}
    </ul>
  );
}

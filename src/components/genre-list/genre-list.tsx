import {useAppSelector, useAppDispatch} from '../../hooks';
import {setGenre, resetCounter} from '../../store/slices/site-process/site-process';
import {Genres} from '../../const';
import Genre from '../genre/genre';
import {getActiveGenre} from '../../store/slices/site-process/selectors';

export default function GenreList() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);

  const handleClick = (name: string) => {
    dispatch(setGenre(name));
    dispatch(resetCounter());
  };

  return (
    <ul className="catalog__genres-list">
      {Object.entries(Genres).reverse().slice(0, 8).map(([key, value]) => (
        <Genre key={key} name={value} isActive={value === activeGenre} onClick={handleClick} />
      ))}
    </ul>
  );
}

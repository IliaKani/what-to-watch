import {useAppSelector, useAppDispatch} from '../../hooks';
import {setGenre} from '../../store/action';
import {Genres} from '../../const';
import Genre from '../genre/genre';

export default function GenreList() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.activeGenre);

  const handleClick = (name: string) => {
    dispatch(setGenre(name));
  };

  return (
    <ul className="catalog__genres-list">
      {Object.entries(Genres).reverse().slice(0, 8).map(([key, value]) => (
        <Genre key={key} name={value} isActive={value === activeGenre} onClick={handleClick} />
      ))}
    </ul>
  );
}

import {useAppSelector, useAppDispatch} from '../../hooks';
import {increaseCounter} from '../../store/slices/site-process/site-process';
import {CARDS_PER_VIEW} from '../../const';
import {Film} from '../../types/film';
import {getCounter} from '../../store/slices/site-process/selectors';

type ShowMoreProps = {
  films: Film[];
}

export default function ShowMore({films}: ShowMoreProps) {

  const dispatch = useAppDispatch();
  const counter = useAppSelector(getCounter);
  const checkLength = counter * CARDS_PER_VIEW < films.length;

  const handleIncreaseCounter = () => {
    if (checkLength) {
      dispatch(increaseCounter());
    }
  };

  return (
    checkLength ?
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={handleIncreaseCounter}
        >
          Show more
        </button>
      </div> : null
  );
}

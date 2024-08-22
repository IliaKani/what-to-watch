import { useAppDispatch } from '../../../hooks';
import { showMoreFilmsAction } from '../../../store/main-process/main-process.slice';

export function ShowMoreButton() {
  const dispatch = useAppDispatch();

  const handleShowMoreClick = () => {
    dispatch(showMoreFilmsAction());
  };

  return (
    <button
      className="catalog__button"
      type="button"
      onClick={handleShowMoreClick}
    >
      Show more
    </button>
  );
}

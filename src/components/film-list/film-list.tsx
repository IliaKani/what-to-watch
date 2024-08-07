import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film';
import Spinner from '../spinner/spinner';
import SmallFilmCard from '../film-card/film-card';
import {PREVIEW_TIMEOUT, RequestsStatus} from '../../const';
import {getFilmsStatus} from '../../store/slices/films/selectors';

type FilmListProps = {
  films: Film[];
}

export default function FilmList({films}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const [isPlayingFilm, setIsPlayingFilm] = useState<boolean>(false);
  const filmsStatus = useAppSelector(getFilmsStatus);
  let timer: ReturnType<typeof setTimeout>;

  const onMouseEnterHandler = (id: number) => {
    setActiveFilm(id);
    timer = setTimeout(() => {
      setIsPlayingFilm(true);
    }, PREVIEW_TIMEOUT);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(timer);
    setActiveFilm(null);
    setIsPlayingFilm(false);
  };


  if (filmsStatus === RequestsStatus.Loading) {
    return <Spinner />;
  }

  return(
    <div className="catalog__films-list">
      {films.map((film, idx) =>
        (
          <SmallFilmCard
            key={film.id}
            {...film}
            isPlaying={activeFilm === film.id && isPlayingFilm}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
        )
      )}
    </div>
  );
}

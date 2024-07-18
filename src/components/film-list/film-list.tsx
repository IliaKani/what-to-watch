import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film';
import Spinner from '../spinner/spinner';
import SmallFilmCard from '../small-film-card/small-film-card';
import {PREVIEW_TIMEOUT} from '../../const';

type FilmListProps = {
  films: Film[];
}

export default function FilmList({films}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const [isPlayingFilm, setIsPlayingFilm] = useState<boolean>(false);
  let timer: ReturnType<typeof setTimeout>;
  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);

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


  if (isFilmsLoading) {
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

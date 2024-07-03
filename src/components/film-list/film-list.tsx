import {useState} from 'react';
import {Film} from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useAppSelector} from '../../hooks';
import {PREVIEW_TIMEOUT} from '../../const';
import {Genres} from '../../const';

type FilmListProps = {
  films: Film[];
}

export default function FilmList({films}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const [isPlayingFilm, setIsPlayingFilm] = useState<boolean>(false);
  const activeGenre = useAppSelector((state) => state.activeGenre);
  let timer: ReturnType<typeof setTimeout>;

  const onMouseEnterHandler = (id: number) => {
    setActiveFilm(id);
    timer = setTimeout(() => {
      setIsPlayingFilm(true);
    }, PREVIEW_TIMEOUT);
  };

  const onMouseLeaveHandler = () => {
    setActiveFilm(null);
    clearTimeout(timer);
    setIsPlayingFilm(false);
  };

  return(
    <>
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
      {
        activeGenre === Genres.AllGenres &&
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      }
    </>
  );
}

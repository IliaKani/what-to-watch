import { useState } from 'react';
import { TFilms } from '../../types/films';
import { FilmCardSmall } from '../film-card-small/film-card-small';

type TFilmCardsListProps = {
  films: TFilms[];
};

export function FilmCardsList({ films }: TFilmCardsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall
          film={film}
          key={film.id}
          onCardHover={() => {
            setActiveCard(film.id);
          }}
          onCardLeave={() => {
            setActiveCard('');
          }}
          isActive={activeCard === film.id}
        />
      ))}
    </div>
  );
}

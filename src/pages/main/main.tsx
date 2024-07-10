// components
import FilmCard, {FilmCardProps} from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
// hooks
import {useAppSelector} from '../../hooks';
// const
import {CARDS_PER_VIEW, Genres} from '../../const';

type MainProps = {
  filmCardProps: FilmCardProps;
}

export default function Main({filmCardProps}: MainProps) {

  const films = useAppSelector((state) => state.films.filter((film) => (
    state.activeGenre === Genres.AllGenres ? film : film.genre === state.activeGenre)
  ));

  const counter = useAppSelector((state) => state.counter);
  const filteredFilms = films.slice(0, counter * CARDS_PER_VIEW);

  return (
    <>
      <FilmCard {...filmCardProps}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmList films={filteredFilms} />
          <ShowMore films={films} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

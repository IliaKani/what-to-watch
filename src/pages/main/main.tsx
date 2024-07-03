// components
import FilmCard, {FilmCardProps} from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
// hooks
import {useAppSelector} from '../../hooks';
// const
import {Genres} from '../../const';

type MainProps = {
  filmCardProps: FilmCardProps;
}

export default function Main({filmCardProps}: MainProps) {

  const films = useAppSelector((state) => state.films.filter((film) => (
    state.activeGenre === Genres.AllGenres ? film : film.genre === state.activeGenre)
  ));

  return (
    <>
      <FilmCard {...filmCardProps}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmList films={films} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

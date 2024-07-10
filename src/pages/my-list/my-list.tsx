// components
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
// hooks
import {useAppSelector} from '../../hooks';
// const
import {Genres} from '../../const';

export default function MyList() {
  const films = useAppSelector((state) => state.films.filter((film) => (
    state.activeGenre === Genres.AllGenres ? film : film.genre === state.activeGenre)
  ));

  return (
    <div className="user-page">
      <Header title="My list" extraClass="user-page__head"/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>
      <Footer/>
    </div>
  );
}

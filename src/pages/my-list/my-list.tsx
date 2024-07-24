// components
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
// hooks
import {useAppSelector} from '../../hooks';
// const
import {Genres} from '../../const';
import {getActiveGenre} from '../../store/slices/site-process/selectors';
import {getFilms} from '../../store/slices/films/selectors';

export default function MyList() {
  const activeGenre = useAppSelector(getActiveGenre);

  const films = useAppSelector(getFilms).filter((film) => (
    activeGenre === Genres.AllGenres ? film : film.genre === activeGenre)
  );

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

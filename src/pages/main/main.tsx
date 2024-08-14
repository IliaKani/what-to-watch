import {useEffect} from 'react';
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {CARDS_PER_VIEW, Genres, RequestsStatus} from '../../const';
import {getFilms} from '../../store/slices/films/selectors';
import {getActiveGenre, getCounter, getPromoFilm, getPromoFilmStatus} from '../../store/slices/site-process/selectors';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import Promo from '../../components/promo/promo';
import {fetchPromoFilm} from '../../store/thunks/promo';
import PageNotFound from '../page-not-found/page-not-found';


export default function Main() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);

  const films = useAppSelector(getFilms).filter((film) => (
    activeGenre === Genres.AllGenres ? film : film.genre === activeGenre)
  );

  const counter = useAppSelector(getCounter);
  const filteredFilms = films.slice(0, counter * CARDS_PER_VIEW);

  const promoFilm = useAppSelector(getPromoFilm);
  const promoFilmStatus = useAppSelector(getPromoFilmStatus);

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (promoFilmStatus === RequestsStatus.Loading) {
    return <LoadingSpinner />;
  }

  if (promoFilmStatus === RequestsStatus.Failed) {
    return <PageNotFound />;
  }

  return (
    <>
      {
        promoFilm &&
          <Promo {...promoFilm}/>
      }
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

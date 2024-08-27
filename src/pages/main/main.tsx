import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFilms, getFilmsFetchingStatus } from '../../store/films-data/films-data-selectors';
import { getActiveGenre } from '../../store/main-process/main-process.selectors';
import { Catatog } from '../../components/catalog/catalog';
import { FilmCardPromo } from '../../components/film-card-promo/film-card-promo';
import { FilterGenre } from '../../components/filter-genre/filter-genre';
import { Loader } from '../../components/loader/loader';
import { Footer } from '../../components/footer/footer';
import { ALL_GENRES, MAX_GENRES_COUNT, RequestStatus } from '../../const';

export function Main(): JSX.Element {
  const films = useAppSelector(getFilms);
  const filmsFetchingStatus = useAppSelector(getFilmsFetchingStatus);

  const activeGenre = useAppSelector(getActiveGenre);
  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const filmsByGenre =
    activeGenre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === activeGenre);

  if (filmsFetchingStatus === RequestStatus.Pending) {
    return <Loader/>;
  }

  return (
    <>
      <Helmet>
        <title>What to Watch. Main page</title>
      </Helmet>
      <FilmCardPromo/>
      <div className="page-content">
        <section className="catalog">
          {films.length ? (
            <>
              <FilterGenre
                genres={genres.slice(0, MAX_GENRES_COUNT)}
                activeGenre={activeGenre}
              />
              <Catatog films={filmsByGenre}/>
            </>
          ) : (
            <h2 className="catalog">There are no films in database yet</h2>
          )}
        </section>
        <Footer/>
      </div>
    </>
  );
}

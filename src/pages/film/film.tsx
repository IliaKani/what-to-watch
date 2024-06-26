import {useParams} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Film as FilmType} from '../../types/film';
import PageNotFound from '../page-not-found/page-not-found';
import ButtonsList from '../../components/buttons-list/buttons-list';
import FilmList from '../../components/film-list/film-list';

type FilmProps = {
  films: FilmType[];
}

export default function Film({films}: FilmProps) {
  const {id} = useParams();

  const currentFilm: FilmType | undefined = films.find((film : FilmType) => film.id === Number(id));

  if (!currentFilm) {
    return (
      <PageNotFound />
    );
  }

  const {
    name,
    posterImage,
    previewImage,
    // backgroundImage,
    // backgroundColor,
    description,
    rating,
    // scoresCount,
    director,
    starring,
    // runTime,
    genre,
    released,
    // isFavorite,
    // videoLink,
    // previewVideoLink,
  } = currentFilm;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={previewImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <ButtonsList id={Number(id)}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>
                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: {starring.join(',')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={films} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

import { Header } from '../header/header';
import { useAppSelector } from '../../hooks';
import {
  getMyList,
  getPromoFilm,
  getPromoFilmFetchingStatus,
} from '../../store/films-data/films-data-selectors';
import { MyListButton } from '../buttons/my-list-button/my-list-button';
import { PlayButton } from '../buttons/play-button/play-button';
import { Loader } from '../loader/loader';
import { PROMO_NOT_FOUND_MOCK, RequestStatus } from '../../const';

export function FilmCardPromo(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const myList = useAppSelector(getMyList);

  const promoFilmFetchingStatus = useAppSelector(getPromoFilmFetchingStatus);

  if (promoFilmFetchingStatus === RequestStatus.Pending) {
    return <Loader/>;
  }

  return promoFilmFetchingStatus === RequestStatus.Success && promoFilm ? (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promoFilm.posterImage}
              alt={promoFilm.name}
              width={218}
              height={327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>
            <div className="film-card__buttons">
              <PlayButton id={promoFilm.id}/>
              <MyListButton
                id={promoFilm.id}
                myList={myList}
                isActive={promoFilm.isFavorite}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={PROMO_NOT_FOUND_MOCK} alt="promo not found mock"/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
    </section>
  );
}

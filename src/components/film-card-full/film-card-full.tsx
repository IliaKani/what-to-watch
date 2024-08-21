import { useAppSelector } from '../../hooks';
import { Header } from '../header/header';
import { AuthorizationStatus } from '../../const';
import { Tabs } from '../tabs/tabs/tabs';
import { TFilm } from '../../types/film';
import { getMyList } from '../../store/films-data/films-data-selectors';
import { MyListButton } from '../buttons/my-list-button/my-list-button';
import { PlayButton } from '../buttons/play-button/play-button';
import { ReviewButton } from '../buttons/review-button/review-button';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type TFilmCardFullProps = {
  film: TFilm;
};

export function FilmCardFull({ film }: TFilmCardFullProps): JSX.Element {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released,
    isFavorite,
  } = film;

  const myList = useAppSelector(getMyList);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="film-card film-card--full" style={{ backgroundColor }}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
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
            <div className="film-card__buttons">
              <PlayButton id={id}/>
              <MyListButton id={id} myList={myList} isActive={isFavorite}/>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <ReviewButton/>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name} width={218} height={327}/>
          </div>
          <Tabs film={film}/>
        </div>
      </div>
    </section>
  );
}

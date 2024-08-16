import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ButtonsList from '../../components/buttons-list/buttons-list';
import FilmList from '../../components/film-list/film-list';
import Tabs from '../../components/tabs/tabs';
import ChooseSection from '../../components/choose-section/choose-section';
import {MAX_SIMILAR_FILMS, RequestsStatus, TABS} from '../../const';
import {useAppSelector} from '../../hooks';
import {fetchSimilarFilms} from '../../store/thunks/similar';
import {fetchComments} from '../../store/thunks/comments';
import {fetchFilm} from '../../store/thunks/film';
import {getFilm, getFilmStatus} from '../../store/slices/film/selectors';
import {getSimilar} from '../../store/slices/similar/selectors';
import {getComments} from '../../store/slices/comments/selectors';
import PageNotFound from '../page-not-found/page-not-found';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import HelmetComponent from '../../components/helmet-component/helmet-component';

export default function Film() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  const filmStatus = useAppSelector(getFilmStatus);
  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilar)
    .filter((film) => film.id !== Number(id))
    .slice(0, MAX_SIMILAR_FILMS);
  const comments = useAppSelector(getComments);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  useEffect(() => {
    Promise.all([
      dispatch(fetchFilm(Number(id))),
      dispatch(fetchSimilarFilms(Number(id))),
      dispatch(fetchComments(Number(id)))
    ]);
  }, [id, dispatch]);

  if (filmStatus === RequestsStatus.Loading) {
    return <LoadingSpinner />;
  }

  if (filmStatus === RequestsStatus.Failed || !currentFilm) {
    return (
      <PageNotFound />
    );
  }

  const {
    name,
    posterImage,
    previewImage,
    backgroundColor,
    genre,
    released,
    isFavorite
  } = currentFilm;

  const filmStyle = {
    backgroundColor,
  };

  return (
    <>
      <section className="film-card film-card--full" style={filmStyle}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={previewImage} alt={name}/>
          </div>

          <HelmetComponent title='what to watch' description='What to watch - Watch your film'/>
          <h1 className="visually-hidden">WTW</h1>

          <Header extraClass="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <ButtonsList id={Number(id)} isFavorite={isFavorite}/>
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
              <Tabs activeTab={activeTab} onClick={handleTabClick}/>
              <ChooseSection
                film={currentFilm}
                comments={comments}
                activeSection={activeTab}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

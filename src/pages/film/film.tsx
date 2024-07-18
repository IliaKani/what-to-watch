import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';
// components
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ButtonsList from '../../components/buttons-list/buttons-list';
import FilmList from '../../components/film-list/film-list';
import Tabs from '../../components/tabs/tabs';
import ChooseSection from '../../components/choose-section/choose-section';
// pages
import PageNotFound from '../page-not-found/page-not-found';
// const
import {MAX_SIMILAR_FILMS, TABS} from '../../const';
// hooks
import {useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import {fetchComments, fetchFilm, fetchSimilarFilms} from '../../store/action';

export default function Film() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  const isFilmLoading = useAppSelector((state) => state.isFilmLoading);
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms.filter((currentFilm) => film && currentFilm.id !== film.id).slice(0, MAX_SIMILAR_FILMS));
  const comments = useAppSelector((state) => state.comments);

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

  if (!film) {
    return (
      <PageNotFound />
    );
  }

  if (isFilmLoading) {
    return <Spinner />;
  }

  const {
    name,
    posterImage,
    previewImage,
    backgroundColor,
    genre,
    released,
  } = film;

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

          <h1 className="visually-hidden">WTW</h1>

          <Header extraClass="film-card__head" />

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
              <Tabs activeTab={activeTab} onClick={handleTabClick}/>
              <ChooseSection
                film={film}
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

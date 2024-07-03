import {useState} from 'react';
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
import {TABS} from '../../const';
// hooks
import {useAppSelector} from '../../hooks';

export default function Film() {
  const {id} = useParams();
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  const currentFilm = useAppSelector((state) => state.films.find((film) => (
    film.id === Number(id))
  ));

  const films = useAppSelector((state) => state.films);

  if (!currentFilm) {
    return (
      <PageNotFound />
    );
  }

  const filteredFilms = films.filter((film) => film.genre === currentFilm.genre && film.id !== currentFilm.id).splice(0,4);

  const {
    name,
    posterImage,
    previewImage,
    backgroundColor,
    genre,
    released,
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
              <Tabs activeTab={activeTab} onClick={handleTabClick}/>
              <ChooseSection film={currentFilm} activeSection={activeTab} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={filteredFilms} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

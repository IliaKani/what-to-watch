import {useState} from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {Film as FilmType} from '../../types/film';
import PageNotFound from '../page-not-found/page-not-found';
import ButtonsList from '../../components/buttons-list/buttons-list';
import FilmList from '../../components/film-list/film-list';
import Tabs from '../../components/tabs/tabs';
import {TABS} from '../../const';
import ChooseSection from '../../components/choose-section/choose-section';

type FilmProps = {
  films: FilmType[];
}

export default function Film({films}: FilmProps) {
  const {id} = useParams();
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

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
    backgroundColor,
    // description,
    // rating,
    // scoresCount,
    // director,
    // starring,
    // runTime,
    genre,
    released,
    // isFavorite,
    // videoLink,
    // previewVideoLink,
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
          <FilmList films={films} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

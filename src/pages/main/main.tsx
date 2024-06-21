import { useId } from 'react';
import FilmCard, {FilmCardProps} from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import {SmallFilmCardType} from '../../types/small-film-card-type';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type MainProps = {
  films: SmallFilmCardType[];
  filmCardProps: FilmCardProps;
}

export default function Main({films, filmCardProps}: MainProps) {
  const id = useId();
  return (
    <>
      <FilmCard {...filmCardProps}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>
          <div className="catalog__films-list">
            {films.map((film, idx) =>
              <SmallFilmCard key={id} {...film} />
            )}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

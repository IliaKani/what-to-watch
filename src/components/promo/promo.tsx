import Header from '../header/header';
import ButtonsList from '../buttons-list/buttons-list';
import {ButtonsType} from '../../const';
import {Film} from '../../types/film';

export default function Promo({id, name, genre, released, posterImage, backgroundImage}: Film) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header extraClass="film-card__head"/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={`${name} poster`} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <ButtonsList id={id} hideButton={ButtonsType.AddReview}/>
          </div>
        </div>
      </div>
    </section>
  );
}

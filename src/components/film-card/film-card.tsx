import Header from '../header/header';
import ButtonsList from '../buttons-list/buttons-list';
import {ButtonsType} from '../../const';

export type FilmCardProps = {
  id: number;
  title: string;
  genre: string;
  year: string;
  posterUrl: string;
  pictureUrl: string;
}

export default function FilmCard({id, title, genre, year, posterUrl, pictureUrl}: FilmCardProps) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={`img/${pictureUrl}`} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header extraClass="film-card__head"/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={`img/${posterUrl}`} alt={`${title} poster`} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>
            <ButtonsList id={id} hideButton={ButtonsType.AddReview}/>
          </div>
        </div>
      </div>
    </section>
  );
}

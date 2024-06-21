import {SmallFilmCardType} from '../../types/small-film-card-type';

export default function SmallFilmCard({title, picture}: SmallFilmCardType) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${picture}`} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

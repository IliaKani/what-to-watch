import {Film} from '../../types/film';
import {checkRating} from '../../helpers/checkRating';

export default function Overview({director, starring, rating, description, scoresCount}: Film) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{checkRating(rating)}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(',')} and other</strong></p>
      </div>
    </>
  );
}

import { TReview } from '../../types/reviews';
import { getReviewDate } from '../../utils';

type TReviewProps = {
  review: TReview;
};

export function Review({ review }: TReviewProps): JSX.Element {
  const { id, comment, date, rating, user } = review;

  return (
    <div className="review">
      <div className="review" key={id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user}</cite>
            <time className="review__date" dateTime={getReviewDate(date)}>
              {getReviewDate(date)}
            </time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
    </div>
  );
}

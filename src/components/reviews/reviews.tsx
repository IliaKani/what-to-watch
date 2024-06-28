import {Film} from '../../types/film';
import {comments} from '../../mocks/comments';
import Review from '../review/review';

export default function Reviews(data: Film) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => <Review key={comment.id} {...comment} />)}
      </div>
      <div className="film-card__reviews-col">
        {comments.map((comment) => <Review key={comment.id} {...comment} />)}
      </div>
    </div>
  );
}

import {comments} from '../../mocks/comments';
import Review from '../review/review';
import {prepareReviewsData} from '../../helpers/prepareReviewsData';

export default function Reviews() {
  const preparedData = prepareReviewsData(comments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {preparedData[0].map((comment) => <Review key={comment.id} {...comment} />)}
      </div>
      {
        preparedData[1].length > 0 &&
        <div className="film-card__reviews-col">
          {preparedData[1].map((comment) => <Review key={comment.id} {...comment} />)}
        </div>
      }
    </div>
  );
}

import {Comment} from '../../types/comment';
import moment from 'moment';

export default function Review({user, comment, rating, date}: Comment) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={moment(date).format('YYYY-MM-D')}>{moment(date).format('MMMM Do YYYY')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

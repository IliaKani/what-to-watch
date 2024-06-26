import {useState, ChangeEvent} from 'react';
import RatingStar from '../rating-star/rating-star';
import {RATINGS, DEFAULT_CHECKED_INDEX, REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH, MIN_RATING} from '../../const';

export default function ReviewForm() {

  const [formData, setFormData] = useState({
    rating: DEFAULT_CHECKED_INDEX,
    review: ''
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            RATINGS.map((rating) => (
              <RatingStar
                key={String(rating)}
                value={rating}
                defaultChecked={rating === DEFAULT_CHECKED_INDEX}
                onChange={handleFieldChange}
              />
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review"
          id="review"
          placeholder="Review text"
          value={formData.review}
          onChange={handleFieldChange}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              formData.review.length > REVIEW_MAX_LENGTH ||
              formData.review.length < REVIEW_MIN_LENGTH ||
              formData.rating === MIN_RATING
            }
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

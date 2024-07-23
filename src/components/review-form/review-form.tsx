import {useState, ChangeEvent, FormEvent} from 'react';
import {postComment} from '../../store/thunks/comments';
import {useAppDispatch} from '../../hooks';
import RatingStar from '../rating-star/rating-star';
import {
  RATINGS,
  DEFAULT_CHECKED_INDEX,
  REVIEW_MIN_LENGTH,
  REVIEW_MAX_LENGTH,
  MIN_RATING,
  AuthorizationStatus, AppRoute
} from '../../const';
import {useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/slices/user/selectors';

type ReviewFormProps = {
  id: number;
}

export default function ReviewForm({id}: ReviewFormProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [formData, setFormData] = useState({
    rating: DEFAULT_CHECKED_INDEX,
    review: ''
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const {rating, review} = formData;
    dispatch(postComment(
      {
        id,
        rating,
        comment: review
      }
    ))
      .then(() => navigate(`${AppRoute.Film}/${id}`));

    setFormData({rating: DEFAULT_CHECKED_INDEX, review: ''});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
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
        {authorizationStatus === AuthorizationStatus.Auth && (
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
        )}
      </div>
    </form>
  );
}

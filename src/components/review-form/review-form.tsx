import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAddReviewFetchingStatus } from '../../store/films-data/films-data-selectors';
import { addReviewAction } from '../../store/api-actions';
import { TFilm } from '../../types/film';
import { AppRoute, CommentLength, RequestStatus, ratingMap } from '../../const';
import { clearAddReviewFetchingStatus } from '../../store/films-data/fims-data.slice';

type TReviewFormProps = {
  id: TFilm['id'];
  backgroundColor: TFilm['backgroundColor'];
};

export function ReviewForm({ id, backgroundColor }: TReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addReviewFetchingStatus = useAppSelector(getAddReviewFetchingStatus);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const isValid =
    comment.length >= CommentLength.Min &&
    comment.length <= CommentLength.Max &&
    rating !== '';
  const isUIBlocked = addReviewFetchingStatus === RequestStatus.Pending;

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };
  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewData = {
      rating: Number(rating),
      comment: comment,
    };
    dispatch(addReviewAction({ reviewData, id }));
  };

  useEffect(() => {
    if (addReviewFetchingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
      navigate(`${AppRoute.Film}/${id}`);
    }
    if (addReviewFetchingStatus === RequestStatus.Rejected) {
      toast.error('Something went wrong, please try again');
    }
    dispatch(clearAddReviewFetchingStatus());
  }, [addReviewFetchingStatus, dispatch, id, navigate]);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Object.entries(ratingMap)
              .reverse()
              .map(([score, value]) => (
                <Fragment key={score}>
                  <input
                    className="rating__input"
                    id={`star-${score}`}
                    type="radio"
                    name="rating"
                    value={score}
                    checked={rating === score}
                    onChange={handleInputChange}
                    disabled={isUIBlocked}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${score}`}
                    title={value}
                  >
                    Rating
                  </label>
                </Fragment>
              ))}
          </div>
        </div>
        <div className="add-review__text" style={{ backgroundColor: 'black' }}>
          <textarea
            className="add-review__textarea"
            style={{ backgroundColor, opacity: 0.8 }}
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={CommentLength.Min}
            maxLength={CommentLength.Max}
            value={comment}
            onChange={handleTextAreaChange}
            disabled={isUIBlocked}
          />
          <div
            className="add-review__submit"
            style={{ backgroundColor, opacity: 0.8 }}
          >
            <button
              className="add-review__btn"
              style={{ backgroundColor }}
              type="submit"
              disabled={!isValid || isUIBlocked}
            >
              {isUIBlocked ? 'Sending...' : 'Post'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

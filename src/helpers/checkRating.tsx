import {RatingStatus} from '../const';

export const checkRating = (rating: number): string => {
  if (rating >= 0 && rating <= 3) {
    return RatingStatus.Bad;
  } else if (rating >= 3 && rating <= 5) {
    return RatingStatus.Normal;
  } else if (rating >= 5 && rating <= 8) {
    return RatingStatus.Good;
  } else if (rating >= 8 && rating <= 10) {
    return RatingStatus.VeryGood;
  } else if (rating === 10) {
    return RatingStatus.Awesome;
  } else {
    return 'Wrong rating value';
  }
};

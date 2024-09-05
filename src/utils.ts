import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TReview } from './types/reviews';

dayjs.extend(duration);

export function getFilmRating(rating: number): string {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }
  if (rating >= 5 && rating < 8) {
    return 'Good';
  }
  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }
  if (rating >= 10) {
    return 'Awesome';
  }
  return '';
}

export function getTimeFromMins(mins: number): string {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

export function getReviewDate(date: TReview['date']): string {
  return dayjs(date).format('MMMM DD, YYYY');
}

export const getVideoTimeFormat = (time: number): string => {
  const dur = dayjs.duration(time, 'seconds');
  return dur.format(`[-]${dur.hours() === 0 ? '' : 'HH[:]'}mm:ss`);
};

import {Comment} from '../types/comment';
export const prepareReviewsData = (comments: Comment[]): [Comment[], Comment[]] => {
  const commentsClone = [...comments];
  const halfLength = Math.round(commentsClone.length / 2);
  const firstCol = commentsClone.splice(halfLength);
  return [firstCol, commentsClone];
};

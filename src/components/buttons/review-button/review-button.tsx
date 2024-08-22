import { Link } from 'react-router-dom';

export function ReviewButton(): JSX.Element {
  return (
    <Link to={'review'} className="btn film-card__button">
      Add review
    </Link>
  );
}

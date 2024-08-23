import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export function UserHeaderNotAuth(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.Login} className="user-block__link">
          Sign in
        </Link>
      </li>
    </ul>
  );
}

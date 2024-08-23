import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUser } from '../../store/user-process/user-process.selectors';
import { AppRoute } from '../../const';

export function UserHeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <ul className="user-block">
      <Link to={AppRoute.MyList} className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl} alt={user?.name} width={63} height={63} />
        </div>
      </Link>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={AppRoute.Login}
          onClick={(e) => {
            e.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

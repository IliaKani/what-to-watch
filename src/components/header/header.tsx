import {MouseEvent} from 'react';
import {AppRoute} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {logoutUser} from '../../store/action';

type HeaderProps = {
  title?: string;
  extraClass?: string;
  hideSignIn?: boolean;
}

export default function Header({title, extraClass, hideSignIn}: HeaderProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <header className={`page-header ${extraClass ? extraClass : ''}`}>
      <div className="logo">
        <Link className="logo__link" to={AppRoute.Root}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {title && (
        <h1 className="page-title user-page__title">{title}</h1>
      )}
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={() => navigate(AppRoute.MyList)}>
              <img src={user} alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="#" onClick={handleLogout}>Sign out</a>
          </li>
        </ul>
      )}
      {!hideSignIn && authorizationStatus === AuthorizationStatus.NoAuth && (
        <div className="user-block">
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        </div>
      )}
    </header>
  );
}

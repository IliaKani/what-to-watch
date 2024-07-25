import {MouseEvent, ReactNode} from 'react';
import {AppRoute} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {logoutUser} from '../../store/thunks/user';
import {getAuthorizationStatus, getUserInfo} from '../../store/slices/user/selectors';

type HeaderProps = {
  children?: ReactNode;
  title?: string;
  extraClass?: string;
  hideSignIn?: boolean;
}

export default function Header({title, extraClass, hideSignIn, children}: HeaderProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserInfo);
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
      {children}
      {title && (
        <h1 className="page-title user-page__title">{title}</h1>
      )}
      {authorizationStatus === AuthorizationStatus.Auth && user !== null && (
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
      {!hideSignIn && authorizationStatus !== AuthorizationStatus.Auth && (
        <div className="user-block">
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        </div>
      )}
    </header>
  );
}

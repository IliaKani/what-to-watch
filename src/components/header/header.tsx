import {MouseEvent} from 'react';
import {AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const onClickHandler = (e: MouseEvent<HTMLHeadingElement> | MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`${AppRoute.Root}`);
  };
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <a className="logo__link" onClick={onClickHandler}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

import {MouseEvent} from 'react';
import {AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';
import {SmallFilmCardType} from '../../types/small-film-card-type';

export default function SmallFilmCard({name, previewImage, id, onMouseEnter, onMouseLeave}: SmallFilmCardType) {
  const navigate = useNavigate();

  const onClickHandler = (e: MouseEvent<HTMLHeadingElement> | MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`${AppRoute.Film}/${id}`);
    if (window) {
      window.scrollTo({top: 0, left: 0});
    }
  };

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image" onClick={onClickHandler}>
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title" onClick={onClickHandler}>
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

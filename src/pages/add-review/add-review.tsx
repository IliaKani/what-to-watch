import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm, getFilmFetchingStatus } from '../../store/films-data/films-data-selectors';
import { fetchFilmAction } from '../../store/api-actions';
import { Logo } from '../../components/logo/logo';
import { UserHeaderAuth } from '../../components/user-header/user-header-auth';
import { ReviewForm } from '../../components/review-form/review-form';
import { PageNotFound } from '../page-not-found/page-not-found';
import { Loader } from '../../components/loader/loader';
import { AppRoute, LOGO_HEADER, RequestStatus } from '../../const';
import { Helmet } from 'react-helmet-async';

export function AddReview(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const filmFetchingStatus = useAppSelector(getFilmFetchingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  if (filmFetchingStatus === RequestStatus.Pending || !film) {
    return <Loader />;
  }

  if (!id) {
    return <PageNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>What to Watch. Add review</title>
      </Helmet>
      {film ? (
        <section
          className="film-card film-card--full"
          style={{ backgroundColor: film.backgroundColor }}
        >
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt="The Grand Budapest Hotel" />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header">
              <Logo logoClass={LOGO_HEADER} />
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link
                      to={`${AppRoute.Film}/${id}`}
                      className="breadcrumbs__link"
                    >
                      {film.name}
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link to="#" className="breadcrumbs__link">
                      Add review
                    </Link>
                  </li>
                </ul>
              </nav>
              <UserHeaderAuth />
            </header>
            <div className="film-card__poster film-card__poster--small">
              <img
                src={film.posterImage}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
          </div>
          <ReviewForm id={film.id} backgroundColor={film.backgroundColor} />
        </section>
      ) : (
        ''
      )}
    </>
  );
}

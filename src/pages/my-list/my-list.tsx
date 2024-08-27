import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyList, getMyListFetchingStatus } from '../../store/films-data/films-data-selectors';
import { fetchMyListAction } from '../../store/api-actions';
import { FilmCardsList } from '../../components/film-cards-list/film-cards-list';
import { UserHeaderAuth } from '../../components/user-header/user-header-auth';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { LOGO_HEADER, RequestStatus } from '../../const';
import { Loader } from '../../components/loader/loader';

export function MyList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyListAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(getMyList);
  const myListFetchingStatus = useAppSelector(getMyListFetchingStatus);

  if (myListFetchingStatus === RequestStatus.Pending) {
    return <Loader/>;
  }

  return (
    <>
      <Helmet>
        <title>What to Watch. My list</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo logoClass={LOGO_HEADER}/>
          <h1 className="page-title user-page__title">
            My list{' '}
            <span className="user-page__film-count">
              {favoriteFilms.length}
            </span>
          </h1>
          <UserHeaderAuth/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmCardsList films={favoriteFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

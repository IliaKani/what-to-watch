import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { Main } from '../../pages/main/main';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { AddReview } from '../../pages/add-review/add-review';
import { Film } from '../../pages/film/film';
import { Login } from '../../pages/login/login';
import { MyList } from '../../pages/my-list/my-list';
import { Player } from '../../pages/player/player';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
import {
  checkAuthAction,
  fetchFilmsAction,
  fetchMyListAction,
  fetchPromoFilmAction,
} from '../../store/api-actions';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchMyListAction());
    }
  });

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory} basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path={AppRoute.Root} element={<Main/>}/>
          <Route path={`${AppRoute.Film}/:id`} element={<Film/>}/>
          <Route
            path={AppRoute.Login}
            element={<Login authorizationStatus={authorizationStatus}/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AddReview/>
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<Player/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

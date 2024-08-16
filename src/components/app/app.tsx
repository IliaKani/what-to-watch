import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';

import Main from '../../pages/main/main';
import Player from '../../pages/player/player';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';

import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';
import {getToken} from '../../services/token';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilms} from '../../store/thunks/films';
import {fetchUserStatus} from '../../store/thunks/user';
import {getAuthorizationStatus, getUserInfo} from '../../store/slices/user/selectors';
import {fetchFavorite} from '../../store/thunks/favorite';

export default function App() {
  const dispatch = useAppDispatch();
  const token = getToken();
  const user = useAppSelector(getUserInfo);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserStatus());
    }
    dispatch(fetchFilms());
  }, [token, dispatch]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && user !== null) {
      dispatch(fetchFavorite());
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Main/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute onlyUnAuth>
              <Login/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={<Player />}
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={<Film />}
        />
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.Review}`}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

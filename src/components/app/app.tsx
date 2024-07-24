import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';

// pages
import Main from '../../pages/main/main';
import Player from '../../pages/player/player';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';

// components
import PrivateRoute from '../private-route/private-route';

// const
import {AppRoute} from '../../const';
import {getToken} from '../../services/token';
import {useAppDispatch} from '../../hooks';
import {fetchFilms} from '../../store/thunks/films';
import {fetchUserStatus} from '../../store/thunks/user';

export default function App() {
  const dispatch = useAppDispatch();
  const token = getToken();

  useEffect(() => {
    if (token) {
      dispatch(fetchUserStatus());
    }
    dispatch(fetchFilms());
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

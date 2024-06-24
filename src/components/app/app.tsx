import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';

import Main from '../../pages/main/main';
import Player from '../../pages/player/player';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';

import {FilmCardProps} from '../film-card/film-card';
import PrivateRoute from '../private-route/private-route';
import {films} from '../../mocks/films';

const filmCardMock: FilmCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
  posterUrl: 'the-grand-budapest-hotel-poster.jpg',
  pictureUrl: 'bg-the-grand-budapest-hotel.jpg',
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Main films={films} filmCardProps={filmCardMock} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={<Player />}
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={<Film films={films} />}
        />
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.Review}`}
          element={<AddReview />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

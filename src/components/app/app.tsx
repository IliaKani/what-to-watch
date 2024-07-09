import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Main from '../../pages/main/main';
import Player from '../../pages/player/player';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';

// components
import {FilmCardProps} from '../film-card/film-card';
import PrivateRoute from '../private-route/private-route';

// const
import {AppRoute} from '../../const';

const filmCardMock: FilmCardProps = {
  id: 1,
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
          element={<Main filmCardProps={filmCardMock} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
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

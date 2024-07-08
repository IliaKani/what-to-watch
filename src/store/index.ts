import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {fetchFilms} from './action';
import {createAPI} from '../services/api';

const api = createAPI();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(fetchFilms());

import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
// import {fetchFilms, fetchUserStatus} from './action';
import {createAPI} from '../services/api';

const api = createAPI();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

// store.dispatch(fetchFilms());
// store.dispatch(fetchUserStatus());

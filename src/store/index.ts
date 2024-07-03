import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {setFilms} from './action';
import {films} from '../mocks/films';

export const store = configureStore({reducer});
store.dispatch(setFilms(films));

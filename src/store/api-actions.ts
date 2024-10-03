import { AxiosInstance } from 'axios';
import { TAppDispatch, TAppState } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken, saveToken } from '../services/token';
import { TFilms } from '../types/films';
import { TFilm } from '../types/film';
import { TUser } from '../types/user';
import { TMyList } from '../types/my-list';
import { TAddReview, TReviews } from '../types/reviews';
import { TAuthData } from '../types/auth-data';
import { APIRoute, NameSpace } from '../const';

type TExtra = {
  dispatch: TAppDispatch;
  state: TAppState;
  extra: AxiosInstance;
};

const checkAuth = (api: AxiosInstance) => {
  if (!api.defaults.headers.common['Authorization']) {
    throw new Error('Sign in, please');
  }
};

export const fetchFilmsAction = createAsyncThunk<TFilms[], undefined, TExtra>(
  `${NameSpace.Films}/fetchFilms`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFilms[]>(APIRoute.Films);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<
  TFilms[],
  TFilm['id'],
  TExtra
>(`${NameSpace.Films}/fetchSimilarFilms`, async (id, { extra: api }) => {
  const { data } = await api.get<TFilms[]>(`${APIRoute.Films}/${id}/similar`);
  return data;
});

export const fetchPromoFilmAction = createAsyncThunk<TFilm, undefined, TExtra>(
  `${NameSpace.Films}/fetchPromoFilm`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFilm>(`${APIRoute.Promo}`);
    return data;
  }
);

export const fetchFilmAction = createAsyncThunk<TFilm, TFilm['id'], TExtra>(
  `${NameSpace.Films}/fetchFilm`,
  async (id, { extra: api }) => {
    const { data } = await api.get<TFilm>(`${APIRoute.Films}/${id}`);
    return data;
  }
);

export const fetchMyListAction = createAsyncThunk<TFilms[], undefined, TExtra>(
  `${NameSpace.Films}/fetchMyList`,
  async (_arg, { extra: api }) => {
    checkAuth(api);
    const { data } = await api.get<TFilms[]>(APIRoute.MyList);
    return data;
  }
);

export const changeMyListAction = createAsyncThunk<TFilm, TMyList, TExtra>(
  `${NameSpace.Films}/changeMyList`,
  async ({ id, status }, { dispatch, extra: api }) => {
    checkAuth(api);
    const { data } = await api.post<TFilm>(
      `${APIRoute.MyList}/${id}/${status}`
    );
    dispatch(fetchMyListAction());
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<
  TReviews,
  TFilm['id'],
  TExtra
>(`${NameSpace.Films}/fetchReviews`, async (id, { extra: api }) => {
  const { data } = await api.get<TReviews>(`${APIRoute.Reviews}/${id}`);
  return data;
});

export const addReviewAction = createAsyncThunk<
  TReviews,
  { reviewData: TAddReview; id: TFilm['id'] },
  TExtra
>(
  `${NameSpace.Films}/addReview`,
  async ({ reviewData, id }, { dispatch, extra: api }) => {
    checkAuth(api);
    const { data } = await api.post<TReviews>(
      `${APIRoute.Reviews}/${id}`,
      reviewData
    );
    dispatch(fetchReviewsAction(id));
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<TUser, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    checkAuth(api);
    const { data } = await api.get<TUser>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<TUser, TAuthData, TExtra>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<TUser>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, TExtra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    checkAuth(api);
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
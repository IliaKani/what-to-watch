import {createAsyncThunk} from '@reduxjs/toolkit';
import {Comment} from '../../types/comment';
import {Film} from '../../types/film';
import {AxiosInstance} from 'axios';
import {AppRoute} from '../../const';
import {Action} from '../action';
import {CommentData} from '../../types/comment-data';

export const fetchComments = createAsyncThunk<Comment[], Film['id'], { extra: AxiosInstance }>(
  Action.FETCH_COMMENTS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${AppRoute.Comments}/${id}`);

    return data;
  });

export const postComment = createAsyncThunk<Comment[], CommentData, { extra: AxiosInstance }>(
  Action.POST_COMMENT,
  async ({id, comment, rating}, { extra: api }) => {
    const { data } = await api.post<Comment[]>(`${AppRoute.Comments}/${id}`, {comment, rating});

    return data;
  });


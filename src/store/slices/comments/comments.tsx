import {createSlice} from '@reduxjs/toolkit';
import {Comment} from '../../../types/comment';
import {RequestsStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {fetchComments, postComment} from '../../thunks/comments';

type CommentsData = {
  comments: Comment[];
  status: RequestsStatus;
  hasError: boolean;
};

const initialState: CommentsData = {
  comments: [],
  status: RequestsStatus.Idle,
  hasError: false,
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      })
      .addCase(postComment.pending, (state) => {
        state.status = RequestsStatus.Loading;
        state.hasError = false;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = RequestsStatus.Success;
      })
      .addCase(postComment.rejected, (state) => {
        state.status = RequestsStatus.Failed;
        state.hasError = true;
      });
  }
});

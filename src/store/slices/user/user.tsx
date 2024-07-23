import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../const';
import {NameSpace} from '../../../const';
import {fetchUserStatus, loginUser, logoutUser} from '../../thunks/user';
import {FetchUser} from '../../../types/fetch-user';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: FetchUser['avatarUrl'] | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload?.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload?.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});

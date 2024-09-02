import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { TUserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';

const initialState: TUserProcess = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginFetchingStatus: RequestStatus.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginFetchingStatus = RequestStatus.Pending;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginFetchingStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loginFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});

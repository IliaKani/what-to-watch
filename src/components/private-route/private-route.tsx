import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export function PrivateRoute(props: TPrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

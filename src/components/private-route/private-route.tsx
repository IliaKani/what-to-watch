import { Location, Navigate, useLocation } from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type LocationState = {
  from?: Location;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const {onlyUnAuth, children} = props;
  /* eslint-disable */
  const userInfo = useAppSelector((state) => state.user);
  const location: Location<LocationState> = useLocation() as Location<LocationState>;

  if (userInfo && onlyUnAuth) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!userInfo && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{ from: location }}/>;
  }

  return children;
}

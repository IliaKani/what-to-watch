import { Location, Navigate, useLocation } from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import {getUserInfo} from '../../store/slices/user/selectors';

type PrivateRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type LocationState = {
  from?: Location;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const {onlyUnAuth, children} = props;
  const userInfo = useAppSelector(getUserInfo);
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

import { AuthorizationStatus, LOGO_HEADER } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { Logo } from '../logo/logo';
import { UserHeaderNotAuth } from '../user-header/user-header-not-auth';
import { UserHeaderAuth } from '../user-header/user-header-auth';

export function Header() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo logoClass={LOGO_HEADER} />

      {authorizationStatus === AuthorizationStatus.Auth ? (
        <UserHeaderAuth />
      ) : (
        <UserHeaderNotAuth />
      )}
    </header>
  );
}

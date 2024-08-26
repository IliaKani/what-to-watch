import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { LoginForm } from '../../components/login-form/login-form';
import { AppRoute, AuthorizationStatus, LOGO_HEADER } from '../../const';

type TLoginProps = {
  authorizationStatus: AuthorizationStatus;
};

export function Login({ authorizationStatus }: TLoginProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  return (
    <>
      <Helmet>
        <title>What to Watch. Login</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo logoClass={LOGO_HEADER}/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <LoginForm/>
        <Footer/>
      </div>
    </>
  );
}

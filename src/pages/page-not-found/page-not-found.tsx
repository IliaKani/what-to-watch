import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { AppRoute, LOGO_HEADER } from '../../const';
import { Logo } from '../../components/logo/logo';

export function PageNotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Logo logoClass={LOGO_HEADER}/>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__message">
            <h2>Error 404 page not found</h2>
            <Link to={AppRoute.Root} className="sign-in__link">
              Back to the homepage
            </Link>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

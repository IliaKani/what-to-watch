import cn from 'classnames';
import { toast } from 'react-toastify';
import {FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
// components
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {loginUser} from '../../store/thunks/user';
import {AuthData} from '../../types/auth-data';
import {isNotEmpty, isEmail, isValid} from '../../helpers/validationRules';
import {ERROR_MESSAGES} from '../../const';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (userData: AuthData) => {
    dispatch(loginUser(userData));
  };

  const showErrorMessage = (userData: AuthData) => {
    const errors: { [key: string]: string } = {};
    if (!isNotEmpty(userData.email)) {
      errors['email'] = ERROR_MESSAGES.LOGIN_IS_EMPTY;
      toast.warn(ERROR_MESSAGES.LOGIN_IS_EMPTY);
    }
    if (!isEmail(userData.email)) {
      errors['email'] = ERROR_MESSAGES.WRONG_EMAIL_VALUE;
      toast.warn(ERROR_MESSAGES.WRONG_EMAIL_VALUE);
    }
    if (!isEmail(userData.password)) {
      errors['password'] = ERROR_MESSAGES.WRONG_PASSWORD_VALUE;
      toast.warn(ERROR_MESSAGES.WRONG_PASSWORD_VALUE);
    }
    setErrorMessage(errors);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isValid(loginData)) {
      showErrorMessage(loginData);
      return;
    }

    onSubmit(loginData);
  };

  return (
    <div className="user-page">
      <Header extraClass="user-page__head" title="Sign In" hideSignIn/>
      <div className="sign-in user-page__content">
        <form action="#" method="post" className="sign-in__form" onSubmit={handleSubmit}>
          {!isValid &&
            Object.values(errorMessage).map((message) => (
              <div className="sign-in__message" key={message}>
                <p>{message}</p>
              </div>
            ))}
          <div className="sign-in__fields">
            <div className={cn('sign-in__field', {
              'sign-in__field--error': errorMessage['email'],
            })}
            >
              <input
                className="sign-in__input"
                type="email"
                onChange={handleInputChange}
                value={loginData.email}
                placeholder="Email address"
                name="email"
                id="email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cn('sign-in__field', {
              'sign-in__field--error': errorMessage['password'],
            })}
            >
              <input
                className="sign-in__input"
                type="password"
                onChange={handleInputChange}
                value={loginData.password}
                placeholder="Password"
                name="password"
                id="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

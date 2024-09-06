import { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getLoginFetchingStatus } from '../../store/user-process/user-process.selectors';
import { TAuthData } from '../../types/auth-data';
import { RequestStatus } from '../../const';

const EMAIL_INVALID_MESSAGE = 'Please enter a valid email address';
const PASSWORD_INVALID_MESSAGE =
  'Password must contain at least one letter and one number';

const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/;

export function LoginForm() {
  const dispatch = useAppDispatch();
  const loginFetchingStatus = useAppSelector(getLoginFetchingStatus);

  const isUIBlocked = loginFetchingStatus === RequestStatus.Pending;

  const [formData, setFormData] = useState<TAuthData>({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({ email: true, password: true });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailPattern.test(formData.email)) {
      setErrorMessage(EMAIL_INVALID_MESSAGE);
      setIsValid({ email: false, password: true });
    } else if (!passwordPattern.test(formData.password)) {
      setErrorMessage(PASSWORD_INVALID_MESSAGE);
      setIsValid({ email: true, password: false });
    } else {
      dispatch(
        loginAction({ email: formData.email, password: formData.password })
      );
    }
  };

  return (
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        method="past"
        onSubmit={handleFormSubmit}
        noValidate
      >
        {errorMessage && (
          <div className="sign-in__message">
            <p>{errorMessage}</p>
          </div>
        )}
        <div className="sign-in__fields">
          <div
            className={classNames('sign-in__field', {
              'sign-in__field--error': !isValid.email,
            })}
          >
            <input
              onChange={handleFormChange}
              value={formData.email}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="email"
              disabled={isUIBlocked}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>
          <div
            className={classNames('sign-in__field', {
              'sign-in__field--error': !isValid.password,
            })}
          >
            <input
              onChange={handleFormChange}
              value={formData.password}
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              disabled={isUIBlocked}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit" disabled={isUIBlocked}>
            {isUIBlocked ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
}

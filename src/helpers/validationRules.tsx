import {AuthData} from '../types/auth-data';

export const isNotEmpty = (value: string) => value.trim() !== '';
export const isEmail = (value: string) => value.includes('@');
export const isValidPassword = (value: string) => {
  const hasDigit = /\d/.test(value);
  const hasLetter = /[a-zA-Zа-яА-Я]/.test(value);
  return value.length > 0 && hasDigit && hasLetter;
};

export const validationRules = {
  notEmpty: (value: AuthData) => isNotEmpty(value.email) && isNotEmpty(value.password),
  validEmail: (value: AuthData) => isEmail(value.email),
  validPassword: (value: AuthData) => isValidPassword(value.password),
};

export const isValid = (loginData: AuthData) => Object.keys(validationRules).every((rule) =>
  validationRules[rule as ValidationRulesKeys](loginData));

export type ValidationRulesKeys = keyof typeof validationRules;

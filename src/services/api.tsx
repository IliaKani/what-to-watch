import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import {toast} from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  /* eslint-disable */
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};

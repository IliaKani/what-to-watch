import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {store} from './store';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ToastContainer/>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);

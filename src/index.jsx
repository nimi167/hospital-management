import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// assets
import 'assets/scss/style.scss';

// third party
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// project import
import App from 'layout/App';
import reducer from 'store/reducer';
import * as serviceWorker from 'serviceWorker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const store = configureStore({ reducer });

const root = createRoot(document.getElementById('root'));

// ==============================|| MAIN - REACT DOM RENDER  ||==============

root.render(
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
      </LocalizationProvider>
    </BrowserRouter>
  </Provider>
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';

import App from './app/App';
import { RouterProvider } from './app/router-provider/ui/router-provider';
import { UserProvider } from './entities/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider />
      <App />
    </UserProvider>
  </React.StrictMode>,
);

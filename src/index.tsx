import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';

import App from './app/App';
import { RouterProvider } from './app/router-provider/ui/router-provider';
import { UserProvider } from './entities/user';
import { ProductProvider } from './entities/product';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <RouterProvider />
        <App />
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
);

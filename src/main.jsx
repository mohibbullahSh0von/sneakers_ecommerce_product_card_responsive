import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home, Layout, Collection, Contact, About, Checkout } from './index';
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './context/store';

const route = createRoutesFromElements(
  <>
    <Route path="/" Component={Layout}>
      <Route index Component={Collection} />
      <Route path="home" Component={Home} />
      <Route path="contact" Component={Contact} />
      <Route path="about" Component={About} />
      <Route path="checkout" Component={Checkout} />
    </Route>
  </>
);

const router = createHashRouter(route);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import PrivateRoutes from './utils/PrivateRoutes';
import HomePage from './pages/HomePage';
import MemberPage from './pages/MemberPage';
import AuthPage from './pages/AuthPage';
import { ROUTES } from './utils/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN, errorElement: <ErrorPage />, children: [
      {
        element: <PrivateRoutes />, children: [
          { index: true, element: <HomePage /> },
          { path: ROUTES.MEMBER, element: <MemberPage /> }
        ]
      },
      { path: ROUTES.AUTH, element: <AuthPage /> }
    ]
  }
]);
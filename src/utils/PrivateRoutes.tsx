
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/index';
import { ROUTES } from './routes';

const PrivateRoutes = () => {
  const { currentUserToken } = useAppSelector(state => state.auth);
  const isAuth = !!currentUserToken;

  return (
    isAuth ? <Outlet /> : <Navigate to={`/${ROUTES.AUTH}`} />
  );
};

export default PrivateRoutes;
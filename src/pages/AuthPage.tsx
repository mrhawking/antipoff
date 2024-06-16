import { useAppSelector } from '../store';
import AuthForm from '../components/Auth/AuthForm';

const AuthPage = () => {
  const { currentUserToken } = useAppSelector(state => state.auth);
  const isAuth = !!currentUserToken;

  return (
    <main>
      <section className="paddingTop">
        {isAuth && <p className="align-center">Вы уже вошли в систему</p>}
        {!isAuth && <AuthForm />}
      </section>
    </main>
  );
};

export default AuthPage;
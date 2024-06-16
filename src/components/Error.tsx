import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import classes from './Error.module.css';

const Error = () => {
  return (
      <div className={classes.error}>
        <p >Произошла ошибка</p>
        <Link to={ROUTES.MAIN}>На главную</Link>
      </div>
  );
};

export default Error;
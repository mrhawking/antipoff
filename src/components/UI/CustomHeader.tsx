import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import CustomButton from './CustomButton';
import CustomLink from './CustomLink';
import ExitIcon from './Icons/ExitIcon';
import BackIcon from './Icons/BackIcon';
import { LogOut } from '../../store/auth-actions';
import { generatePrevUrl } from '../../utils/utils';
import { ROUTES } from '../../utils/routes';
import classes from './CustomHeader.module.css';

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

const CustomHeader: React.FC<TProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let prevUrl = null;
  if (location.pathname !== ROUTES.MAIN) {
    prevUrl = generatePrevUrl(location.pathname);
  }

  const logoutHandler = () => {
    dispatch(LogOut());
    navigate(`/${ROUTES.AUTH}`);
  };

  return (
    <header className={classes.mainHeader}>
      <div className="container">
        <div className={classes.headerInner}>
          <div className={classes.headerActions}>
            {prevUrl &&
              <div>
                <CustomLink className={classes.headerButton} url={prevUrl} color='gray'>
                  <span>Назад</span>
                </CustomLink>
                <Link className={classes.headerIcon} to={prevUrl} aria-label="Назад">
                  <BackIcon color="#F8F8F8" id="back-button" />
                </Link>
              </div>
            }
            <div>
              <CustomButton onClick={logoutHandler} className={classes.headerButton} color='gray'>
                <span>Выход</span>
              </CustomButton>
              <button onClick={logoutHandler} className={classes.headerIcon} type='button' aria-label="Выход">
                <ExitIcon color="#F8F8F8" id="exit-button" />
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
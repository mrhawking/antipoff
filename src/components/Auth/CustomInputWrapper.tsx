import EyeIcon from '../UI/Icons/EyeIcon/EyeIcon';
import classes from './CustomInputWrapper.module.css';

type TProps = {
  label: string;
  children: JSX.Element
  id: string;
  errors?: string;
  hasIcon?: boolean;
  onChangeVisibility?: () => void;
};

const CustomInputWrapper: React.FC<TProps> = ({ id, label, children, errors, hasIcon, onChangeVisibility }) => {
  return (
    <div className={classes.inputWrapper}>
      <label className={`text ${classes.inputLabel}`} htmlFor={id}>{label}</label>
      {children}
      {hasIcon && (
        <button className={classes.eyeButton} type="button" onClick={onChangeVisibility}>
          <EyeIcon />
        </button>
      )}
      {errors && <span className={classes.errorField}>{errors}</span>}
    </div>
  );
};

export default CustomInputWrapper;
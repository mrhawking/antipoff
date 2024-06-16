import classes from './CustomButton.module.css';

type TProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'gray';
} & React.ComponentPropsWithoutRef<'button'>;

const CustomButton: React.FC<TProps> = ({ children, className, color, ...props }) => {
  return (
    <button
      className={`${classes.customButton} ${color ? classes[color] : ''} ${className ? className : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;


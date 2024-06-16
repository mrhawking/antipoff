import { Link } from 'react-router-dom';
import classes from './CustomButton.module.css';

type TProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  color?: 'white' | 'gray';
} & React.ComponentPropsWithoutRef<'a'>;

const CustomLink: React.FC<TProps> = ({ children, className, color, url, ...props }) => {
  return (
    <Link
      to={url}
      className={`${classes.customButton}  ${className ? className : ''} ${color ? classes[color] : ''}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink
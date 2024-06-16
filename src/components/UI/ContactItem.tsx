import classes from './ContactItem.module.css';

type TProps = {
  children: JSX.Element
  text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ContactItem: React.FC<TProps> = ({ children, text, ...props }) => {
  return (
    <li className={classes.contactItem}>
      {children}
      <a {...props}>{text}</a>
    </li>
  );
};

export default ContactItem;
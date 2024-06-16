import classes from './MemberHeaderContent.module.css';
import { TMember } from '../../models/team';

type TProps = {
  member: TMember;
}

const MemberHeaderContent: React.FC<TProps> = ({ member }) => {
  return (
    <div className={classes.memberHeaderContent}>
      <div className={classes.memberHeaderAvatar}>
        <img src={`${member.avatar}`} alt={`${member.first_name} ${member.last_name}`} />
      </div>
      <div className={classes.memberHeaderInner}>
        <h2 className={`title ${classes.memberHeaderTitle}`}>
          {`${member.first_name} ${member.last_name}`}
        </h2>
        <p className={`title ${classes.memberHeaderText}`}>
          Партнер
        </p>
      </div>
    </div>
  );
};

export default MemberHeaderContent;
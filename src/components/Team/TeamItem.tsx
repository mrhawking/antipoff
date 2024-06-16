import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import HeartIcon from '../UI/Icons/HeartIcon/HeartIcon';
import { TMember } from '../../models/team';
import { toggleFavorite } from '../../store/favorites-actions';
import classes from './TeamItem.module.css';

type TProps = {
  member: TMember;
  isFavorite: boolean;
};

const TeamItem: React.FC<TProps> = ({ member, isFavorite }) => {
  const dispatch = useAppDispatch();

  const onChangeFavorite = () => {
    dispatch(toggleFavorite(member.id.toString()));
  }

  return (
    <li className={classes.teamItem}>
      <Link to={`${member.id}`}>
        <div className={classes.teamItemAvatar}>
          <img src={member.avatar} alt={`${member.first_name} ${member.last_name}`} />
        </div>
        <h4 className="title title--s">{`${member.first_name} ${member.last_name}`}</h4>
      </Link>
      <button className={classes.favoriteIcon} onClick={onChangeFavorite}>
        <span className="visually-hidden">Добавить в избранное</span>
        <HeartIcon filled={isFavorite} />
      </button>
    </li>
  );
};

export default TeamItem;
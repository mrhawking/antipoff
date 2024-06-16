import { useAppSelector } from '../../store';
import TeamItem from './TeamItem';
import ArrowDown from '../UI/Icons/ArrowDown';
import { TMember } from '../../models/team';
import classes from './Team.module.css';

type TProps = {
  data: TMember[];
  onFetchMembers: () => void;
  buttonDisabled: boolean;
};

const Team: React.FC<TProps> = ({ data, onFetchMembers, buttonDisabled }) => {
  const { favorites } = useAppSelector(state => state.favorites);

  return (
    <section className={classes.team}>
      <h3 className="visually-hidden">Список наших партнеров</h3>
      <ul className={classes.teamList}>
        {data.map(member => <TeamItem key={member.id} member={member} isFavorite={favorites.includes(member.id.toString())} />)}
      </ul>
      {!buttonDisabled && (
        <button type='button' onClick={onFetchMembers} className={classes.showMoreBtn}>
          Показать еще
          <ArrowDown />
        </button>
      )}
    </section>
  );
};

export default Team;
import ContactItem from '../UI/ContactItem';
import MailIcon from '../UI/Icons/MailIcon';
import PhoneIcon from '../UI/Icons/PhoneIcon';
import classes from './MemberContent.module.css';
import { TMember } from '../../models/team';

type TProps = {
  member: TMember;
};

const MemberContent: React.FC<TProps> = ({ member }) => {
  return (
    <section className={classes.memberInner}>
      <h3 className="visually-hidden">Инфоррмация о сотруднике</h3>
      <div className={classes.aboutMember}>
        <p>
          Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
        </p>
        <p>
          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
        </p>
        <p>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
        </p>
      </div>
      <ul className={classes.memberContacts}>
        <ContactItem text="+7 (954) 333-44-55">
          <PhoneIcon color="#512689" />
        </ContactItem>
        <ContactItem text={member.email}>
          <MailIcon color="#512689" />
        </ContactItem>
      </ul>
    </section>
  );
};

export default MemberContent;
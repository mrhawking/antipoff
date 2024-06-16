import classes from './HomeHeaderContent.module.css';

const HomeHeaderContent = () => {
  return (
    <div className={classes.headerContentWrapper}>
      <h2 className={`title ${classes.headerContentTitle}`}>
        Наша команда
      </h2>
      <p className={`title ${classes.headerContentText}`}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на&nbsp;их плечи, и умеющие находить выход из&nbsp;любых, даже самых сложных ситуаций.
      </p>
    </div>
  );
};

export default HomeHeaderContent;
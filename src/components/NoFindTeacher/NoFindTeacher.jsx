import styles from './NoFindTeacher.module.css';

export const NoFindContainer = () => {
  return (
    <div className={styles.NoFindContainer}>
      <img src="/src/assets/img/lupa.jpg" alt="No Find" />
      <p>Sorry, we didn't find any teachers for you!</p>
    </div>
  );
};

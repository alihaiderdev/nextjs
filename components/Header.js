import styles from '../styles/Home.module.css';
import customStyle from '../styles/custom.module.css';

const Header = () => {
  //   return <div className={styles.footer}>Header</div>;
  return <div className={`${styles.footer} ${customStyle.color}`}>Header</div>;
};

export default Header;

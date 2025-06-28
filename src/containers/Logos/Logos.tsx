import viteLogo from "/vite.svg";
import styles from "./styles.module.css";

const Logos = () => (
  <div className={styles.root}>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className={styles.logo} alt="Vite logo" />
    </a>
  </div>
);

export default Logos;

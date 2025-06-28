import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./styles.module.css";

const Logos = () => (
  <div className={styles.root}>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className={styles.logo} alt="Vite logo" />
    </a>
    {/* <a href="https://react.dev" target="_blank">
      <img
        src={reactLogo}
        className={[styles.logo, styles.react].join(" ")}
        alt="React logo"
      />
    </a> */}
  </div>
);

export default Logos;

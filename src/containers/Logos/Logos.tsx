import React from "react";
import type { FC } from "react";
import viteLogo from "/vite.svg";
import styles from "./styles.module.css";

const Logos: FC = () => (
  <div className={styles.root}>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className={styles.logo} alt="Vite logo" />
    </a>
  </div>
);

export default Logos;

import React, { FC } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};

export default Header;

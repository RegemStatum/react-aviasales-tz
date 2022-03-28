import React, { FC } from "react";
import logo from "../../assets/images/layout/logo.png";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  return <img src={logo} alt="logo" className={styles.logo} />;
};

export default Logo;

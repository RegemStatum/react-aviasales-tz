import React, { FC } from "react";
import styles from "./FilterContainer.module.css";

interface FilterContainerProps {
  name: string;
}

const FilterContainer: FC<FilterContainerProps> = ({ name, children }) => {
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <div>{children}</div>
    </div>
  );
};

export default FilterContainer;

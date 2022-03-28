import React, { FC } from "react";
import StopsAmount from "./stops-amount/StopsAmount";
import styles from "./Filters.module.css";
import StopsAmountFilter from "../../types/filters/StopsAmountFilter";

interface FiltersProps {
  filters: Array<StopsAmountFilter>;
  setFilters: React.Dispatch<React.SetStateAction<StopsAmountFilter[]>>;
}

const Filters: FC<FiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className={styles.container}>
      <StopsAmount filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default Filters;

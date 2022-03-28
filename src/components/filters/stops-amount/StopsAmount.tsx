import React, { FC } from "react";
import StopsAmountFilter from "../../../types/filters/StopsAmountFilter";
import FilterContainer from "../FilterContainer";
import styles from "./StopsAmount.module.css";

interface StopsAmountProps {
  filters: Array<StopsAmountFilter>;
  setFilters: React.Dispatch<React.SetStateAction<StopsAmountFilter[]>>;
}

const StopsAmount: FC<StopsAmountProps> = ({ filters, setFilters }) => {
  const handleCheckboxChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const filter = target.value as StopsAmountFilter;
    let newFilters = [...filters];

    if (newFilters.includes(filter)) {
      const filterIndex = newFilters.findIndex((el) => el === filter);
      newFilters.splice(filterIndex, 1);
    } else {
      newFilters.push(filter);
    }
    setFilters(newFilters);
  };

  return (
    <div className={styles.container}>
      <FilterContainer name="Количество пересадок">
        <label
          htmlFor={StopsAmountFilter.noStops}
          className={styles.input_container}
        >
          Без пересадок
          <input
            type="checkbox"
            name={StopsAmountFilter.noStops}
            id={StopsAmountFilter.noStops}
            value={StopsAmountFilter.noStops}
            onChange={handleCheckboxChange}
            checked={filters.includes(StopsAmountFilter.noStops)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <label
          htmlFor={StopsAmountFilter.oneStop}
          className={styles.input_container}
        >
          1 Пересадка
          <input
            type="checkbox"
            name={StopsAmountFilter.oneStop}
            id={StopsAmountFilter.oneStop}
            value={StopsAmountFilter.oneStop}
            onChange={handleCheckboxChange}
            checked={filters.includes(StopsAmountFilter.oneStop)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <label
          htmlFor={StopsAmountFilter.twoStops}
          className={styles.input_container}
        >
          2 Пересадки
          <input
            type="checkbox"
            name={StopsAmountFilter.twoStops}
            id={StopsAmountFilter.twoStops}
            value={StopsAmountFilter.twoStops}
            onChange={handleCheckboxChange}
            checked={filters.includes(StopsAmountFilter.twoStops)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <label
          htmlFor={StopsAmountFilter.threeStops}
          className={styles.input_container}
        >
          3 Пересадки
          <input
            type="checkbox"
            name={StopsAmountFilter.threeStops}
            id={StopsAmountFilter.threeStops}
            value={StopsAmountFilter.threeStops}
            onChange={handleCheckboxChange}
            checked={filters.includes(StopsAmountFilter.threeStops)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </FilterContainer>
    </div>
  );
};

export default StopsAmount;

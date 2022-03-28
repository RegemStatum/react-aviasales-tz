import React, { FC } from "react";
import SortBy from "../../types/SortBy";
import styles from "./Sort.module.css";

interface SortProps {
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

const Sort: FC<SortProps> = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === SortBy.cheapest) {
      setSortBy(SortBy.cheapest);
    }
    if (target.value === SortBy.fastest) {
      setSortBy(SortBy.fastest);
    }
    if (target.value === SortBy.optimal) {
      setSortBy(SortBy.optimal);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <input
          type="radio"
          name="sort"
          id={SortBy.cheapest}
          value={SortBy.cheapest}
          checked={sortBy === SortBy.cheapest}
          onChange={handleSortChange}
        />
        <label htmlFor={SortBy.cheapest}> Самый дешевый</label>
      </div>
      <div className={styles.input_container}>
        <input
          type="radio"
          name="sort"
          id={SortBy.fastest}
          value={SortBy.fastest}
          checked={sortBy === SortBy.fastest}
          onChange={handleSortChange}
        />
        <label htmlFor={SortBy.fastest}> Самый быстрый</label>
      </div>
      <div className={styles.input_container}>
        <input
          type="radio"
          name="sort"
          id={SortBy.optimal}
          value={SortBy.optimal}
          checked={sortBy === SortBy.optimal}
          onChange={handleSortChange}
        />
        <label htmlFor={SortBy.optimal}> Оптимальный </label>
      </div>
    </div>
  );
};

export default Sort;

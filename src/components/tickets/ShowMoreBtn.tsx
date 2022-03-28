import React, { FC } from "react";
import styles from "./ShowMoreBtn.module.css";

interface ShowMoreBtnProps {
  showMoreTickets: () => void;
}

const ShowMoreBtn: FC<ShowMoreBtnProps> = ({ showMoreTickets }) => {
  return (
    <button className={styles.btn} onClick={showMoreTickets}>
      Показать еще 5 билетов
    </button>
  );
};

export default ShowMoreBtn;

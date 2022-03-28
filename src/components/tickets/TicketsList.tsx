import React, { FC } from "react";
import Ticket from "../../types/Ticket";
import ShowMoreBtn from "./ShowMoreBtn";
import TicketCard from "./TicketCard";
import styles from "./TicketsList.module.css";

interface TicketsListProps {
  ticketsList: Array<Ticket>;
  allTicketsLength: number;
  showMoreTickets: () => void;
}

const TicketsList: FC<TicketsListProps> = ({
  ticketsList,
  allTicketsLength,
  showMoreTickets,
}) => {
  return (
    <div className={styles.list}>
      {ticketsList.map((ticket, index) => (
        <TicketCard key={index} {...ticket} />
      ))}
      {ticketsList.length !== allTicketsLength && (
        <ShowMoreBtn showMoreTickets={showMoreTickets} />
      )}
    </div>
  );
};

export default TicketsList;

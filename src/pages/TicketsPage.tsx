import React, { FC, useEffect, useState } from "react";
import Filters from "../components/filters/Filters";
import Sort from "../components/sort/Sort";
import TicketsList from "../components/tickets/TicketsList";
import StopsAmountFilter from "../types/filters/StopsAmountFilter";
import SortBy from "../types/SortBy";
import Ticket from "../types/Ticket";
import styles from "./TicketsPage.module.css";

const TicketsPage: FC = () => {
  const [sortBy, setSortBy] = useState(SortBy.cheapest);
  const [filters, setFilters] = useState<Array<StopsAmountFilter>>([]);
  const [allTickets, setAllTickets] = useState<Array<Ticket>>([]);
  const [ticketsToShow, setTicketsToShow] = useState<Array<Ticket>>([]);

  const fetchTickets = async () => {
    const response = await fetch(
      "https://front-test.beta.aviasales.ru/tickets?searchId=t9uy"
    );
    const data = await response.json();
    setAllTickets(data.tickets);
    setTicketsToShow(data.tickets.slice(0, 5));
  };

  const showMoreTickets = () => {
    if (ticketsToShow.length === allTickets.length) {
      return;
    }
    const startIndex = ticketsToShow.length + 1;
    const newTicketsAmount = 5;
    const newTickets = allTickets.slice(
      startIndex,
      startIndex + newTicketsAmount
    );
    setTicketsToShow([...ticketsToShow, ...newTickets]);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // sorting
  useEffect(() => {
    let sortedTickets: Ticket[] = [];
    if (sortBy === SortBy.cheapest) {
      sortedTickets = allTickets.sort((a, b) => {
        return a.price - b.price;
      });
      setAllTickets(sortedTickets);
    }
    if (sortBy === SortBy.fastest) {
      sortedTickets = allTickets.sort((a, b) => {
        return a.segments[0].duration - b.segments[0].duration;
      });
      setAllTickets(sortedTickets);
    }
    if (sortBy === SortBy.optimal) {
      sortedTickets = allTickets;
    }
    setTicketsToShow(sortedTickets.slice(0, 5));
  }, [sortBy, allTickets]);

  // filtering
  useEffect(() => {
    let newTickets = [...allTickets];

    // if no stops
    if (filters.includes(StopsAmountFilter.noStops)) {
      newTickets = newTickets.filter(
        (ticket) => !ticket.segments[0].stops.length
      );
      setAllTickets(newTickets);
      setTicketsToShow(newTickets.slice(0, 5));
      return;
    }

    // if any stops
    if (filters.includes(StopsAmountFilter.threeStops)) {
      newTickets = newTickets.filter(
        (ticket) => ticket.segments[0].stops.length <= 3
      );
    }
    if (filters.includes(StopsAmountFilter.threeStops)) {
      newTickets = newTickets.filter(
        (ticket) => ticket.segments[0].stops.length <= 3
      );
    }
    if (filters.includes(StopsAmountFilter.twoStops)) {
      newTickets = newTickets.filter(
        (ticket) => ticket.segments[0].stops.length <= 2
      );
    }
    if (filters.includes(StopsAmountFilter.oneStop)) {
      newTickets = newTickets.filter(
        (ticket) => ticket.segments[0].stops.length <= 1
      );
    }

    setAllTickets(newTickets);
    setTicketsToShow(newTickets.slice(0, 5));
  }, [filters]);

  return (
    <div className={styles.container}>
      <Filters filters={filters} setFilters={setFilters} />
      <div>
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <TicketsList
          ticketsList={ticketsToShow}
          allTicketsLength={allTickets.length}
          showMoreTickets={showMoreTickets}
        />
      </div>
    </div>
  );
};

export default TicketsPage;

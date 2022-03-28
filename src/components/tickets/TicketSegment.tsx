import React, { FC } from "react";
import { TicketSegmentType } from "../../types/Ticket";
import styles from "./TicketSegment.module.css";

const formatTravelTime = (travelHours: number, travelMinutes: number) => {
  return travelHours
    ? `${travelHours}ч ${travelMinutes}м`
    : `${travelMinutes}м`;
};

const formatDepartureArrivalTime = (
  date: string,
  travelHours: number,
  travelMinutes: number
) => {
  const departureDate = new Date(date);
  const timeObj = {
    departureHours: "",
    departureMinutes: "",
    arrivalHours: "",
    arrivalMinutes: "",
  };

  let departureHours = departureDate.getHours();
  let departureMinutes = departureDate.getMinutes();

  let arrivalHours = departureHours + travelHours;
  let arrivalMinutes = departureMinutes + travelMinutes;

  if (arrivalMinutes > 59) {
    arrivalHours++;
    arrivalMinutes -= 60;
  }

  if (arrivalHours > 23) {
    arrivalHours %= 24;
  }

  timeObj.departureHours =
    departureHours < 10 ? `0${departureHours}` : `${departureHours}`;
  timeObj.departureMinutes =
    departureMinutes < 10 ? `0${departureMinutes}` : `${departureMinutes}`;
  timeObj.arrivalHours =
    arrivalHours < 10 ? `0${arrivalHours}` : `${arrivalHours}`;
  timeObj.arrivalMinutes =
    arrivalMinutes < 10 ? `0${arrivalMinutes}` : `${arrivalMinutes}`;

  return `${timeObj.departureHours}:${timeObj.departureMinutes} - ${timeObj.arrivalHours}:${timeObj.arrivalMinutes}`;
};

const TicketSegment: FC<TicketSegmentType> = (props) => {
  const { origin, destination, date, stops, duration } = props;
  const stopsText =
    stops.length === 0
      ? "Без пересадок"
      : stops.length === 1
      ? "1 Пересадка"
      : stops.length < 5
      ? `${stops.length} Пересадки`
      : `${stops.length} Пересадок`;

  const travelHours = Math.floor(duration / 3600);
  const travelMinutes = travelHours
    ? Math.ceil((duration - travelHours * 3600) / 60)
    : Math.ceil(duration / 60);

  const travelTime = formatTravelTime(travelHours, travelMinutes);
  const departureArrivalTime = formatDepartureArrivalTime(
    date,
    travelHours,
    travelMinutes
  );

  return (
    <div className={styles.container}>
      <div>
        <span>
          {origin} - {destination}
        </span>
        <p>{departureArrivalTime}</p>
      </div>
      <div>
        <span>В пути</span>
        <p>{travelTime}</p>
      </div>
      <div>
        <span>{stopsText}</span>
        <p>{stops.join(", ")}</p>
      </div>
    </div>
  );
};

export default TicketSegment;

import React, { FC } from "react";
import Ticket from "../../types/Ticket";
import TicketSegment from "./TicketSegment";
import styles from "./TicketCard.module.css";

const getCarrierLogo = (iata: string) => {
  return `//pics.avs.io/99/36/${iata}.png`;
};

const formatPriceToText = (price: number) => {
  const thousands = Math.floor(price / 1000);
  if (thousands) {
    const notThousands = price - thousands * 1000;
    let notThousandsToShow = notThousands.toString();
    while (notThousandsToShow.length < 3) {
      notThousandsToShow = "0" + notThousandsToShow;
    }
    return `${thousands} ${notThousandsToShow} Р`;
  } else {
    return `${price} Р`;
  }
};

const TicketCard: FC<Ticket> = ({ price, carrier, segments }) => {
  const logoSrc = getCarrierLogo(carrier);
  const formattedPrice = formatPriceToText(price);

  return (
    <div className={styles.container}>
      <header>
        <span>{formattedPrice}</span>
        <img src={logoSrc} alt="company logo" />
      </header>
      {segments.map((segment, index) => (
        <TicketSegment {...segment} key={index} />
      ))}
    </div>
  );
};

export default TicketCard;

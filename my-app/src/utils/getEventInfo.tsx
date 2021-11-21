import React from "react";
import { AboutEventItem } from "../component/AboutEventItem/AboutEventItem";

export const getEventInfo = (id: string, type: string, events: any) => {
  if (type === "movie") {
    const itemInfo: any = events.Cinema.find((item: any) => item.id === id);

    return (
      <AboutEventItem
        type={type}
        title={itemInfo?.title}
        poster={itemInfo?.poster}
        description={itemInfo?.description}
        year={itemInfo?.year}
        country={itemInfo?.country}
        length={itemInfo?.length}
        censorAge={itemInfo?.censorAge}
      />
    );
  }
  if (type === "perfomances") {
    const itemInfo: any = events.Perfomances.find(
      (item: any) => item.id === id
    );
    return (
      <AboutEventItem
        type={type}
        title={itemInfo?.title}
        poster={itemInfo?.poster}
        description={itemInfo?.description}
        year={itemInfo?.year}
        country={itemInfo?.country}
        length={itemInfo?.length}
        censorAge={itemInfo?.censorAge}
      />
    );
  }
  if (type === "сoncerts") {
    const itemInfo: any = events.Concerts.find((item: any) => item.id === id);
    return (
      <AboutEventItem
        type={type}
        title={itemInfo?.title}
        poster={itemInfo?.poster}
        description={itemInfo?.description}
        year={itemInfo?.year}
        country={itemInfo?.country}
        length={itemInfo?.length}
        censorAge={itemInfo?.censorAge}
        place={itemInfo?.place}
      />
    );
  }
  return <div>Объект не найден</div>;
};

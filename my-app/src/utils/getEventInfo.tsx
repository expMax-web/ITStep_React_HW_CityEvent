import React from "react";
import { AboutEventItem } from "../component/AboutEventItem/AboutEventItem";
import { Cinema, Concerts, Perfomances } from "../pages/info/constInfo";

export const getEventInfo = (id: string, type: string) => {
  if (type === "movie") {
    const itemInfo: any = Cinema.find((item: any) => item.id === Number(id));
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
    const itemInfo: any = Perfomances.find(
      (item: any) => item.id === Number(id)
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
    const itemInfo: any = Concerts.find((item: any) => item.id === Number(id));
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

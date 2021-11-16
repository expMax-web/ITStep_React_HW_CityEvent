import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Info } from "../info/constInfo";

export const CinemaPage: React.FC = () => {
  return (
    <div>
      CinemaPage
      <div>
        {Info.Cinema.map((item: any) => (
          <EventItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

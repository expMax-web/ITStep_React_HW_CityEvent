import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Cinema } from "../info/constInfo";

export const CinemaPage: React.FC = () => {
  return (
    <div>
      CinemaPage
      <div>
        {Cinema.map((item: any) => (
          <EventItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

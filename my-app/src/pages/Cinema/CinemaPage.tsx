import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Cinema } from "../info/constInfo";

console.log(Cinema);

export const CinemaPage: React.FC = () => {
  return (
    <div>
      CinemaPage
      <div>
        {Cinema.map((item) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

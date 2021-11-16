import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Info } from "../info/constInfo";

export const ConcertsPage: React.FC = () => {
  return (
    <div>
      ConcertsPage
      <div>
        {Info.Concerts.map((item) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

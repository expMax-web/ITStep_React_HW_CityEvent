import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Concerts } from "../info/constInfo";

export const ConcertsPage: React.FC = () => {
  return (
    <div>
      ConcertsPage
      <div>
        {Concerts.map((item) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

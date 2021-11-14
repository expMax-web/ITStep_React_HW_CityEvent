import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Perfomances } from "../info/constInfo";

export const PerfomancesPage: React.FC = () => {
  return (
    <div>
      PerfomancesPage
      <div>
        {Perfomances.map((item) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

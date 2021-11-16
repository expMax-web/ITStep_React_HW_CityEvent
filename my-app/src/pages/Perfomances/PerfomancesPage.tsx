import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { Info } from "../info/constInfo";

export const PerfomancesPage: React.FC = () => {
  return (
    <div>
      PerfomancesPage
      <div>
        {Info.Perfomances.map((item) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

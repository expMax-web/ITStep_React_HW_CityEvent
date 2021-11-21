import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const PerfomancesPage: React.FC = () => {
  const { events } = useTypeSelector((state) => state.events);
  return (
    <div>
      PerfomancesPage
      <div>
        {events.Perfomances.map((item: any) => (
          <EventItem info={item} />
        ))}
      </div>
    </div>
  );
};

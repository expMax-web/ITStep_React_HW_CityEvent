import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const ConcertsPage: React.FC = () => {
  const { events } = useTypeSelector((state) => state.events);
  return (
    <div>
      ConcertsPage
      <div>
        {events.Concerts.map((item: any) => (
          <EventItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

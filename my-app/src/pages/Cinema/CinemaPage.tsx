import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const CinemaPage: React.FC = () => {
  const { events } = useTypeSelector((state) => state.events);
  return (
    <div>
      CinemaPage
      <div>
        {events.Cinema.map((item: any) => (
          <EventItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const FavoritesPage: React.FC = () => {
  const { favorite } = useTypeSelector((state) => state.favorite);

  if (favorite) {
    return (
      <div>
        FavoritesPage
        <div>
          {favorite.map((item: any) => (
            <EventItem key={Date.now()} info={item} favoriteItem={true} />
          ))}
        </div>
      </div>
    );
  }
  return <div>Список избранного пуст</div>;
};

import React from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const FavoritesPage: React.FC = () => {
  const { favorite } = useTypeSelector((state) => state.favorite);

  console.log(favorite);
  if (favorite) {
    return (
      <div>
        FavoritesPage
        <div>
          {favorite.map((item: any) => (
            <EventItem key={item.id} info={item} favoriteItem={true} />
          ))}
        </div>
      </div>
    );
  }
  return <div>Список избранного пуст</div>;
};

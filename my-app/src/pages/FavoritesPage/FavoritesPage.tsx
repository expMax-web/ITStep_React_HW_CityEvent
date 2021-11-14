import React, { useState } from "react";

import { EventItem } from "../../component/EventItem/EventItem";
import { FavoritesArr } from "../info/Favorites";

export const FavoritesPage: React.FC = () => {
  // if (Favorites) {
  //   return (
  //     <div>
  //       FavoritesPage
  //       <div>
  //         {Favorites.map((item: any) => (
  //           <EventItem key={item.id} info={item} favorite={true} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  return <div>Список избранного пуст</div>;
};

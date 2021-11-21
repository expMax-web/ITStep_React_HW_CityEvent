export const getComments = (type: any, events: any, id: any) => {
  let comments;
  if (type === "movie") {
    events.Cinema.map((item: any) => {
      if (item.id === id) comments = item.comments;
    });
  }
  if (type === "perfomances") {
    events.Perfomances.map((item: any) => {
      if (item.id === id) comments = item.comments;
    });
  }
  if (type === "сoncerts") {
    events.Concerts.map((item: any) => {
      if (item.id === id) comments = item.comments;
    });
  }
  return comments;
};

import React from "react";

interface ItemCommentsProps {
  comments?: any[];
}

export const ItemComments: React.FC<ItemCommentsProps> = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      {comments &&
        comments.map((item: any) => (
          <section>
            <h1>{item.nickName}</h1>
            <p>{item.comment}</p>
          </section>
        ))}
    </div>
  );
};

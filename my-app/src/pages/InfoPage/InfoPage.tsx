import React from "react";
import { useParams } from "react-router-dom";
import { AddEventCommentForm } from "../../component/AddEventCommentForm/AddEventCommentForm";
import { ItemComments } from "../../component/ItemComment/ItemComments";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { getComments } from "../../utils/getComment";
import { getEventInfo } from "../../utils/getEventInfo";

export const InfoPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const { id } = useParams<{ id: string }>();
  const { events } = useTypeSelector((state) => state.events);

  console.log(events);

  return (
    <div>
      {getEventInfo(id, type, events)}
      {
        //Как отрендерить новый коммент сразу же при нажатии на кнопку submit?
        //Какой способ можно придумать, правильный, для того, чтобы показывать нужные комменты в выбранном компоненте??
      }
      <ItemComments comments={getComments(type, events, id)} />
      <AddEventCommentForm id={id} type={type} />
    </div>
  );
};

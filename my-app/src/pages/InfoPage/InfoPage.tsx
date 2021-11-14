import React from "react";
import { useParams } from "react-router-dom";
import { getEventInfo } from "../../utils/getEventInfo";

export const InfoPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const { id } = useParams<{ id: string }>();
  return getEventInfo(id, type);
};

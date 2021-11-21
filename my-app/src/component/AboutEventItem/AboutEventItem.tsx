import React from "react";
import { Poster } from "../Poster/Poster";

interface AboutEventItemProps {
  title?: string;
  poster?: string;
  description?: string;
  year?: number;
  country?: string;
  length?: {
    hour: number;
    minute: number;
  };
  censorAge?: number;
  place?: {
    title: string;
    address: string;
  };
  type: string;
}

export const AboutEventItem: React.FC<AboutEventItemProps> = ({
  title,
  poster,
  description,
  year,
  country,
  length,
  censorAge,
  place,
  type,
}) => {
  if (type === "movie") {
    return (
      <section>
        <h1>{title}</h1>
        <div>
          <Poster poster={poster} big={true} />
          <div>
            <h2>О фильме:</h2>
            <p>{description}</p>
            <p>
              Год:<span>{year}</span>
            </p>
            <p>
              Страна:<span>{country}</span>
            </p>
            {length && (
              <p>
                Длительность:
                <span>
                  {length.hour} ч. {length.minute}мин.
                </span>
              </p>
            )}
            <p>
              Возрастное ограничение:
              <span>{censorAge}+</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
  if (type === "perfomances") {
    return (
      <section>
        <h1>{title}</h1>
        <div>
          <Poster poster={poster} big={true} />
          <div>
            <h2>О спектакле:</h2>
            <p>{description}</p>
            {length && (
              <p>
                Длительность:
                <span>
                  {length.hour} ч. {length.minute}мин.
                </span>
              </p>
            )}
            <p>
              Возрастное ограничение:
              <span>{censorAge}+</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
  if (type === "сoncerts") {
    return (
      <section>
        <h1>{title}</h1>
        <div>
          <Poster poster={poster} big={true} />
          <div>
            <h2>Об исполнителе:</h2>
            <p>{description}</p>
            <p>
              Место проведения:
              <span>
                {place?.title} {place?.address}
              </span>
            </p>
            <p>
              Возрастное ограничение:
              <span>{censorAge}+</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
  return <div>Что-то пошло не так...</div>;
};

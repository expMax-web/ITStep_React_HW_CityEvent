import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";

import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ERROR_MESSAGES } from "./Constants";
import { store } from "../../store";
import { addEvent } from "../../store/actionCreators/addEvent";
import { useTypeSelector } from "../../hooks/useTypeSelector";

import styles from "./AddEventForm.module.scss";

export type Form = {
  title: string;
  country: string;
  year: string;
  lenght: string;
  censorAge: number;
  poster: string;
  description: string;
  place: {
    title: string;
    address: string;
  };
  genre: string[];
  type: string;
  id: string;
  comments: string[];
};

export const AddEventForm: React.FC = () => {
  const [type, setType] = useState("");

  const selectType = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === "movieButton") {
      setType("movie");
    }
    if (event.currentTarget.id === "perfomancesButton") {
      setType("perfomances");
    }
    if (event.currentTarget.id === "concertButton") {
      setType("concerts");
    }
  };

  const { events } = useTypeSelector((state) => state.events);

  const id = `${events.EventNum + 1}`;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Form>({
    defaultValues: {
      title: "",
      country: "",
      year: "",
      lenght: "",
      censorAge: 0,
      poster: "",
      description: "",
      place: {
        title: "",
        address: "",
      },
      genre: ["??", "??"],
      id: id,
      comments: [],
    },
    mode: "onChange",
  });

  const onSubmit = (data: Form) => {
    data.type = type;
    store.dispatch(addEvent(data, data.type, events));
    console.log(data);
  };

  //Как сделать форму лучше, короче, есть идея разбить на 3 разные формы и показывать их в зависимости от нажатой кнопки? Либо =>
  // Не понимаю как контролировать инпуты если попытаться разбить форму на 3 разных компонента, показывать тот или иной в зависимости от типа кнопки selectType. Если собирать данные тут, как передать контроль внутрь компонентов

  return (
    <div>
      <section>
        <h1 className={styles.AddEventContainerTitle}>Выберите тип события</h1>
        <div className={styles.AddEventButtonGroupContainer}>
          <button
            type="button"
            onClick={selectType}
            id="movieButton"
            className={classNames(
              styles.AddEventButton,
              styles.AddEventButtonOutside
            )}
          >
            Фильм
          </button>
          <button
            type="button"
            onClick={selectType}
            id="perfomancesButton"
            className={styles.AddEventButton}
          >
            Спектакль
          </button>
          <button
            type="button"
            onClick={selectType}
            id="concertButton"
            className={classNames(
              styles.AddEventButton,
              styles.AddEventButtonOutside
            )}
          >
            Концерт
          </button>
        </div>
      </section>
      {type && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.AddEventForm}>
          <h1 className={styles.AddEventFormTitle}>Добавить событие</h1>
          <Controller
            control={control}
            name="title"
            rules={{
              required: ERROR_MESSAGES.EmptyField,
            }}
            render={({ field }) => (
              <Input
                onChange={field.onChange}
                labelText="Заголовок"
                error={errors?.title?.message}
              />
            )}
          />
          {type === "movie" && (
            <Controller
              control={control}
              name="country"
              rules={{
                required: ERROR_MESSAGES.EmptyField,
              }}
              render={({ field }) => (
                <Input
                  onChange={field.onChange}
                  labelText="Страна"
                  error={errors?.country?.message}
                />
              )}
            />
          )}
          {type === "movie" && (
            <Controller
              control={control}
              name="year"
              rules={{
                required: ERROR_MESSAGES.EmptyField,
              }}
              render={({ field }) => (
                <Input
                  onChange={field.onChange}
                  labelText="Введите год фильма"
                  error={errors?.year?.message}
                />
              )}
            />
          )}
          {type === "movie" && (
            <fieldset className={styles.CheckboxGroupContainer}>
              <legend className={styles.CheckboxGroupTitle}>
                Выберите жанр
              </legend>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre.0"
                  render={(props) => (
                    <Input
                      {...props}
                      labelText="Боевик"
                      type="checkbox"
                      value="Боевик"
                      className={styles.CheckboxGroupItem}
                      id="action"
                      checked={true}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.1"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Вестерн"
                      value="western"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="western"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.2"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Детектив"
                      value="Детектив"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="detective"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.3"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Драма"
                      value="Драма"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="drama"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.4"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Исторический фильм"
                      value="Исторический фильм"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="historical"
                    />
                  )}
                />
              </div>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre.5"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Комедия"
                      value="Комедия"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="comedy"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.6"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Мелодрама"
                      value="Мелодрама"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="melodrama"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.7"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Фантастика"
                      value="Фантастика"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="fantasy"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.8"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Сказка"
                      value="Сказка"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="fairytale"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre.9"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Трагедия"
                      value="Трагедия"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="tragedy"
                    />
                  )}
                />
              </div>
            </fieldset>
          )}
          {type === "perfomances" && (
            <fieldset className={styles.CheckboxGroupContainer}>
              <legend className={styles.CheckboxGroupTitle}>
                Выберите жанр
              </legend>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre.0"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Драма"
                      type="checkbox"
                      value="drama"
                      className={styles.CheckboxGroupItem}
                      id="drama"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Комедия"
                      value="Комедия"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="comedy"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Буффонада"
                      value="Буффонада"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="Buffoonery"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Водевиль"
                      value="Водевиль"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="Vaudeville"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Мелодрама"
                      value="Мелодрама"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="melodrama"
                    />
                  )}
                />
              </div>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Пародия"
                      value="Пародия"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="parody"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Пастораль"
                      value="Пастораль"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="pastoral"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Мюзикл"
                      value="Мюзикл"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="musical"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Трагедия"
                      value="Трагедия"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="tragedy"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Фарс"
                      value="Фарс"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="farce"
                    />
                  )}
                />
              </div>
            </fieldset>
          )}
          {type === "concerts" && (
            <fieldset className={styles.CheckboxGroupContainer}>
              <legend className={styles.CheckboxGroupTitle}>
                Выберите жанр
              </legend>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Хип-Хоп"
                      type="checkbox"
                      value="Хип-Хоп"
                      className={styles.CheckboxGroupItem}
                      id="hiphop"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Рок"
                      value="Рок"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="Rock"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Шансон"
                      value="Шансон"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="сhanson"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Кантри"
                      value="Кантри"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="сountry"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Электронная музыка"
                      value="Электронная музыка"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="electonic"
                    />
                  )}
                />
              </div>
              <div className={styles.CheckboxGroupItemsContainer}>
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Джаз"
                      value="Джаз"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="jazz"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Поп"
                      value="Поп"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="pop"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Фолк-музыка"
                      value="Фолк-музыка"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="folk"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="genre"
                  render={({ field }) => (
                    <Input
                      onChange={field.onChange}
                      labelText="Q-pop"
                      value="Q-pop"
                      type="checkbox"
                      className={styles.CheckboxGroupItem}
                      id="Q-pop"
                    />
                  )}
                />
              </div>
            </fieldset>
          )}
          {(type === "movie" || type === "perfomances") && (
            <Controller
              control={control}
              name="lenght"
              rules={{
                required: ERROR_MESSAGES.EmptyField,
              }}
              render={({ field }) => (
                <Input
                  onChange={field.onChange}
                  labelText="Введите длительность в минутах"
                  error={errors?.lenght?.message}
                />
              )}
            />
          )}
          <fieldset className={styles.CheckboxGroupContainer}>
            <legend className={styles.CheckboxGroupTitle}>
              Выберите возрастную категорию
            </legend>
            <div className={styles.CheckboxGroupItemsContainer}>
              <Controller
                control={control}
                name="censorAge"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    labelText="0+"
                    type="radio"
                    className={styles.CheckboxGroupItem}
                    id="0"
                    name="censoreAge"
                    value={0}
                  />
                )}
              />
              <Controller
                control={control}
                name="censorAge"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    labelText="6+"
                    type="radio"
                    className={styles.CheckboxGroupItem}
                    id="6"
                    name="censoreAge"
                    value={6}
                  />
                )}
              />
              <Controller
                control={control}
                name="censorAge"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    labelText="12+"
                    type="radio"
                    className={styles.CheckboxGroupItem}
                    id="12"
                    name="censoreAge"
                    value={12}
                  />
                )}
              />
              <Controller
                control={control}
                name="censorAge"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    labelText="16+"
                    type="radio"
                    className={styles.CheckboxGroupItem}
                    id="16"
                    name="censoreAge"
                    value={16}
                  />
                )}
              />
              <Controller
                control={control}
                name="censorAge"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    labelText="18+"
                    type="radio"
                    className={styles.CheckboxGroupItem}
                    id="18"
                    name="censoreAge"
                    value={18}
                  />
                )}
              />
            </div>
          </fieldset>
          <Controller
            control={control}
            name="poster"
            rules={{
              required: ERROR_MESSAGES.EmptyField,
            }}
            render={({ field }) => (
              <Input
                onChange={field.onChange}
                labelText="Введите ссылку на постер"
                error={errors?.poster?.message}
              />
            )}
          />
          {type === "concerts" && (
            <fieldset className={styles.PlaceGroupContainer}>
              <legend>Введите место проведения концерта</legend>
              <Controller
                control={control}
                name="place.title"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    placeholder="Наименование места проведения"
                    error={errors?.place?.title?.message}
                    notFullWidth={true}
                  />
                )}
              />
              <Controller
                control={control}
                name="place.address"
                rules={{
                  required: ERROR_MESSAGES.EmptyField,
                }}
                render={({ field }) => (
                  <Input
                    onChange={field.onChange}
                    placeholder="Введите адрес места проведения"
                    error={errors?.place?.address?.message}
                    notFullWidth={true}
                  />
                )}
              />
            </fieldset>
          )}
          <Controller
            control={control}
            name="description"
            rules={{
              required: ERROR_MESSAGES.EmptyField,
            }}
            render={({ field }) => (
              <TextArea
                onChange={field.onChange}
                placeholder="Напишите что-нибудь..."
                labelText="Введите описание"
                error={errors?.description?.message}
              />
            )}
          />
          {/* <div className={styles.HiddenGroupInput}>
            {type === "movie" && (
              <input
                type="radio"
                checked={true}
                value="movie"
                {...register("type")}
              />
            )}
            {type === "perfomances" && (
              <input
                type="radio"
                checked={true}
                value="perfomances"
                {...register("type")}
              />
            )}
            {type === "сoncerts" && (
              <input
                type="radio"
                checked={true}
                value="сoncerts"
                {...register("type")}
              />
            )}
            <input
              type="radio"
              checked={true}
              value={events.EventNum + 1}
              {...register("id")}
            />
          </div> */}
          <SubmitButton>Submit</SubmitButton>
        </form>
      )}
    </div>
  );
};

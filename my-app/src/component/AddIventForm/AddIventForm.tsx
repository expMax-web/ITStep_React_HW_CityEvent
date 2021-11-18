import React, {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import { useForm, Controller } from "react-hook-form";

import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { validateEmail, validateFio } from "./validation/Validaton";
import { ERROR_MESSAGES } from "./Constants";

import styles from "./AddIventForm.module.scss";

export type Form = {
  title: string;
  country: string;
  year: string;
  lenght: string;
  censorAge: string;
  poster: string;
  description: string;
};

export const AddIventForm: React.FC = () => {
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
      censorAge: "",
      poster: "",
      description: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: Form) => {
    console.log(data);
  };
  const [type, setType] = useState("");
  const selectType = (event: MouseEventHandler<HTMLInputElement>) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    // if (event.target === "movieButton") {
    //   setType("movie");
    // }
    // if (event.target === "perfomancesButton") {
    //   setType("perfomances");
    // }
    // if (event.target === "concertButton") {
    //   setType("concert");
    // }
  };
  return (
    <div>
      <div>
        <input
          type="button"
          onClick={selectType}
          name="movieButton"
          value="Спектакль"
        />
        <input
          type="button"
          onClick={selectType}
          name="perfomancesButton"
          value="Спектакль"
        />
        <input
          type="button"
          onClick={selectType}
          name="concertButton"
          value="Спектакль"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.FeedBackForm}>
        <h1 className={styles.FeedBackFormTitle}>Добавить событие</h1>
        <Controller
          control={control}
          name="title"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder="Дюна"
              labelText="Заголовок"
              error={errors?.title?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder="США"
              labelText="Страна"
              error={errors?.country?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="year"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder=""
              labelText="Введите год фильма"
              error={errors?.year?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lenght"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder="360"
              labelText="Введите длину фильма в минутах"
              error={errors?.lenght?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="censorAge"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder="18"
              labelText="Введите возрастное ограничение"
              error={errors?.censorAge?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="poster"
          rules={{
            required: ERROR_MESSAGES.EmptyField,
            validate: validateFio,
          }}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              placeholder=""
              labelText="Введите ссылку на постер"
              error={errors?.poster?.message}
            />
          )}
        />

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
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
};

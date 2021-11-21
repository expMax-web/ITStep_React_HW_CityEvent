import React from "react";
import { useForm, Controller } from "react-hook-form";

import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ERROR_MESSAGES } from "./Constants";
import { store } from "../../store";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { addComment } from "../../store/actionCreators/addComment";

import styles from "./AddEventCommentForm.module.scss";

interface AddEventCommentFormProps {
  id: string;
  type: string;
}

export type Form = {
  nickName: string;
  comment: string;
};

export const AddEventCommentForm: React.FC<AddEventCommentFormProps> = ({
  id,
  type,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Form>({
    defaultValues: {
      nickName: "",
      comment: "",
    },
  });

  const { events } = useTypeSelector((state) => state.events);

  const onSubmit = (data: Form) => {
    store.dispatch(addComment(data, type, id, events));
    console.log(events);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.AddEventForm}>
      <h1 className={styles.AddEventFormTitle}>
        Добавить комментарий к событию
      </h1>
      <Controller
        control={control}
        name="nickName"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
        }}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            labelText="Введите ваше имя"
            error={errors?.nickName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="comment"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
        }}
        render={({ field }) => (
          <TextArea
            onChange={field.onChange}
            placeholder="Напишите что-нибудь..."
            labelText="Введите комментарий"
            error={errors?.comment?.message}
          />
        )}
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

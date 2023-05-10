import React, { useEffect } from "react";
import { useGetData, useUpdate } from "../../Hooks";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";
import { toast } from "react-toastify";

const EditPage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const editData = useUpdate(`api/users/${id}`);
  const GetSingle = useGetData(["posts", "id"], `/api/users/${id}`);

  console.log(GetSingle);

  const Update = (e) => {
    editData.mutate(
      { e },
      {
        onSuccess: () => toast.success(`this Edit data ${id} !`),
        onError: () => toast.error("this data no edit! "),
      }
    );
    reset();
  };

  useEffect(() => {
    setValue();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-5">{id}EditPage</h1>
      <form
        className="flex flex-col gap-6 w-96 justify-center"
        onSubmit={handleSubmit(Update)}
      >
        {errors.name?.message ? (
          <h1 className="text-red-600">Iltmos Ismingizn kirting</h1>
        ) : (
          ""
        )}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Iltmos malumot krting" }}
          render={({ field }) => <Input {...field} size="large" />}
        />
        {errors.job?.message ? (
          <h1 className="text-red-600">Iltmos Ish Joyni krting</h1>
        ) : (
          ""
        )}
        <Controller
          name="job"
          control={control}
          rules={{ required: "Iltmos Ish Joyni krting" }}
          render={({ field }) => <Input {...field} size="large" />}
        />
        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: "blue" }}
          htmlType="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default EditPage;

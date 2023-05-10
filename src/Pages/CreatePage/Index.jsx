import React from "react";
import { usePostData } from "../../Hooks";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";
import { UserOutlined, FormOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const nav = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const post = usePostData("api/users");
  const Postdata = (data) => {
    post.mutate(
      { data },
      {
        onSuccess: () => toast.success("Addeed User"),
        onError: () => toast.error("Malumot negadur qoshlmadi"),
      }
    );
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-5 text-4xl font-bold">Post Page</h1>

      <form
        className="w-96 flex flex-col gap-4"
        onSubmit={handleSubmit(Postdata)}
      >
        {errors.name?.message ? (
          <h1 className="text-red-600">Iltmos Ismingizn kirting</h1>
        ) : (
          ""
        )}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Iltmos Ismingiz Kirting" }}
          render={({ field }) => (
            <Input
              status={errors.name ? "error" : ""}
              prefix={<UserOutlined />}
              {...field}
              allowClear
              size="large"
            />
          )}
        />
        {errors.job?.message ? (
          <h1 className="text-red-600">Iltmos Ish joyiz krting</h1>
        ) : (
          ""
        )}
        <Controller
          name="job"
          control={control}
          rules={{ required: "Ish joyingizni kirting" }}
          render={({ field }) => (
            <Input
              status={errors.job ? "error" : ""}
              prefix={<FormOutlined />}
              {...field}
              allowClear
              size="large"
            />
          )}
        />
        <Button
          htmlType="submit"
          style={{ backgroundColor: "blue" }}
          type="primary"
        >
          Sentd
        </Button>
      </form>
      <Button
        type="primary"
        style={{ backgroundColor: "black" }}
        className="my-3"
        onClick={() => nav(-1)}
      >
        Back
      </Button>
    </div>
  );
};

export default Create;

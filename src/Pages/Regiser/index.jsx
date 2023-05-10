import React from "react";
import { usePostData } from "../../Hooks";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";
import { UserOutlined, FormOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const nav = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const post = usePostData("api/register");

  const Postdata = (data) => {
    console.log(data);
    post.mutate(
      { data },
      {
        onSuccess: () => {
          toast.success("Register User"), nav("/");
        },
        onError: () => toast.error("Siz Hali Royhatdan otmadingiz "),
      }
    );
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Register</h1>
      <p>eve.holt@reqres.in</p>
      <p>pistol</p>
      <form
        className="w-96 flex flex-col gap-4 mt-10"
        onSubmit={handleSubmit(Postdata)}
      >
        {errors.name?.message ? (
          <h1 className="text-red-600">Iltmos Ismingizn kirting</h1>
        ) : (
          ""
        )}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Iltmos Emailngizni Kirting" }}
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
          name="password"
          control={control}
          rules={{ required: "Iltmos Parolingizni Kiting" }}
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
    </div>
  );
};

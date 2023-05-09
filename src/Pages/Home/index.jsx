import { useState } from "react";
import Catrs from "../../Components/Cart";
import { useGetData } from "../../Hooks";
import { Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();
  const Getdata = useGetData(["posts"], `api/users?page=1`);
  const Getdat1 = useGetData(["posts2"], `api/users?page=2`);

  const DeletedData = (e) => {
    console.log(e.id);
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-5 font-bold">All Users</h1>
      <div className="flex justify-center mt-3">
        <Button
          type="primary"
          style={{ backgroundColor: "blue" }}
          onClick={() => nav("/add")}
        >
          + Add Users
        </Button>
      </div>
      <div className="flex px-32 flex-wrap gap-9 justify-center items-center my-6">
        {Getdata?.data?.data?.map((e) => (
          <Catrs
            key={e.id}
            image={e.avatar}
            title={e.first_name}
            email={e.email}
            surname={e.last_name}
            loading={Getdata?.isLoading}
            Deleteted={() => DeletedData(e)}
            EditData={() => nav(`/edit/${e?.id}`)}
          />
        ))}
        {Getdat1?.data?.data?.map((e) => (
          <Catrs
            key={e.id}
            image={e.avatar}
            title={e.first_name}
            email={e.email}
            surname={e.last_name}
            loading={Getdata?.isLoading}
            Deleteted={() => DeletedData(e)}
            EditData={() => nav(`/edit/${e?.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

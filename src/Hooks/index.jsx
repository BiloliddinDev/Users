import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../Utils";

export const useGetData = (keys, url, options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};

export const usePostData = (url) => {
  return useMutation((data) => instance.post(url, data));
};

export const useUpdate = (url) => {
  return useMutation((data) => instance.patch(url, data));
};

export const useDelete = (url) => {
  return useMutation(() => instance.delete(url));
};

import { useQuery } from "@tanstack/react-query";
import { instance } from "../Utils";

export const useGetData = (keys, url, options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};

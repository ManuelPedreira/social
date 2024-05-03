import { useQuery } from "@tanstack/react-query";
import { getUsersByIds } from "../postCalls";

const useUserList = (userIds?: string[]) => {
  const reducedUserIds = [...new Set(userIds)];

  const { data, isPending, isError } = useQuery({
    queryKey: ["userList", reducedUserIds],
    queryFn: () => getUsersByIds(userIds!),
    enabled: userIds !== undefined,
  });

  return { userList: data, isPending, isError };
};

export default useUserList;

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsersByIds } from "../postCalls";

const useUserList = (userIds?: number[]) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["userList", userIds],
    queryFn: () => getUsersByIds(userIds!),
    enabled: userIds !== undefined,
  });

  const queryClient = useQueryClient();
  if (userIds && userIds.length > 0) {
    const nextUserId = [userIds[userIds.length - 1] + 1];

    queryClient.prefetchQuery({
      queryKey: ["user", nextUserId],
      queryFn: () => getUsersByIds(nextUserId),
    });
  }

  return { userList: data, isPending, isError };
};

export default useUserList;

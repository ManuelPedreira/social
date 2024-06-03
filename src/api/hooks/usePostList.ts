import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPaginatedPosts, getUsersByIds } from "../postCalls";
import { Pagination } from "../postTypes";

const usePostList = (pagination: Pagination) => {
  const { _page, _limit } = pagination;

  const { data, isPending, isError } = useQuery({
    queryKey: ["postList", pagination],
    queryFn: () => getPaginatedPosts({ _page, _limit }),
    enabled: pagination !== undefined,
  });

  const queryClient = useQueryClient();

  const prefetchPostList = (_page: number, _limit: number) => {
    queryClient
      .fetchQuery({
        queryKey: ["postList", { _page, _limit }],
        queryFn: () => getPaginatedPosts({ _page, _limit }),
        staleTime: 10000,
      })
      .then((nextPostList) => {
        const userIds = nextPostList.map(({ userId }) => userId);
        const reducedUserIds = [...new Set(userIds)];

        queryClient.prefetchQuery({
          queryKey: ["userList", reducedUserIds],
          queryFn: () => getUsersByIds(reducedUserIds),
          staleTime: 10000,
        });
      })
      .catch((error) => console.error(error));
  };

  if (_limit && _page) prefetchPostList(_page + 1, _limit);
  if (_limit && _page && _page > 1) prefetchPostList(_page - 1, _limit);

  return { postList: data, isPending, isError };
};

export default usePostList;

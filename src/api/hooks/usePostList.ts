import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPaginatedPosts } from "../postCalls";
import { Pagination } from "../postTypes";

const usePostList = (pagination: Pagination) => {
  const { _page, _limit } = pagination;

  const { data, isPending, isError } = useQuery({
    queryKey: ["postList", pagination],
    queryFn: () => getPaginatedPosts({ _page, _limit }),
    enabled: pagination !== undefined,
  });

  const queryClient = useQueryClient();

  if (_page)
    queryClient.prefetchQuery({
      queryKey: ["postList", _page + 1, _limit],
      queryFn: () => getPaginatedPosts({ _page: _page + 1, _limit }),
    });

  if (_page && _page > 1)
    queryClient.prefetchQuery({
      queryKey: ["postList", _page - 1, _limit],
      queryFn: () => getPaginatedPosts({ _page: _page - 1, _limit }),
    });

  return { postList: data, isPending, isError };
};

export default usePostList;

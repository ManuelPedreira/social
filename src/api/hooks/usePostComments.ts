import { useQuery } from "@tanstack/react-query";
import { getCommentsByPostId } from "../postCalls";

const usePostComments = (postId?: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["commentsList", postId],
    queryFn: () => getCommentsByPostId(postId!),
    enabled: postId !== undefined,
  });

  return { comments: data, isPending, isError };
};

export default usePostComments;

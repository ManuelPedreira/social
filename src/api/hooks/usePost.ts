import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../postCalls";

const usePost = (postId: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
    enabled: postId !== undefined,
  });

  return { post: data, isPending, isError };
};

export default usePost;

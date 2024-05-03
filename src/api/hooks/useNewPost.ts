import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewPost } from "../postCalls";
import { Post } from "../postTypes";

const useNewPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: postNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postList"] });
    },
  });

  const sendPost = (newPost: Post) => {
    queryClient.setQueriesData(
      {
        queryKey: ["postList"],
        exact: false,
      },
      (previusPostList?: Post[]) => [
        {
          ...newPost,
          id: Date.now(),
        },
        ...(previusPostList || []),
      ]
    );
    return mutateAsync(newPost);
  };

  return { sendPost, isPending, isError };
};

export default useNewPost;

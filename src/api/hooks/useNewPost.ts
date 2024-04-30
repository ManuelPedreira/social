import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewPost } from "../postCalls";

const useNewPost = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: postNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postList"] });
    },
  });

  return { sendPost: mutateAsync, isPending, isError };
};

export default useNewPost;

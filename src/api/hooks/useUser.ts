import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../postCalls";

const useUser = (userId?: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId!),
    enabled: userId !== undefined,
  });

  return { user: data, isPending, isError };
};

export default useUser;

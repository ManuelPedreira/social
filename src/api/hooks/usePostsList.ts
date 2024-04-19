import { useEffect, useState } from "react";
import { getPaginatedPosts, getUsersByIds } from "../postCalls";
import { Pagination, Post, RequestStatus, User } from "../postTypes";
import { includesInsensitive } from "../../utils";
import useToast from "../../providers/ToastContext/useToast";

const usePostsList = (
  filter: string,
  pagination?: Pagination,
  localPosts?: Post[]
) => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE
  );
  const { createToast } = useToast();

  useEffect(() => {
    setRequestStatus(RequestStatus.LOADING);

    getPaginatedPosts(pagination)
      .then((posts) => {
        setPostsData(posts);
        const userIds = posts.map(({ userId }) => userId);

        return getUsersByIds(userIds);
      })
      .then((users) => {
        setUsersData(users);
        setRequestStatus(RequestStatus.OK);
        createToast({ text: "Post Loaded!" });
      })
      .catch((e) => {
        createToast({ text: e.message, type: "ERROR", timeOut: 10000 });
        return setRequestStatus(RequestStatus.ERROR);
      });
  }, [pagination]);

  const allPosts: Post[] =
    localPosts && !pagination?._limit
      ? [...localPosts, ...postsData]
      : postsData;

  const filteredPosts =
    allPosts.filter((postData) => {
      const userData = usersData.find(({ id }) => id === postData.userId);

      const name = userData?.name || "";
      const username = userData?.username || "";

      //const { name, username } = userData ?? { name: "", username: "" };

      const searchMatchesName = includesInsensitive(name, filter);
      const searchMatchesUsername = includesInsensitive(username, filter);

      return searchMatchesName || searchMatchesUsername;
    }) || [];

  return { postsData: filteredPosts, usersData, requestStatus };
};

export default usePostsList;

import { Post, User, RequestStatus } from "../../api/postTypes";
import CompactPost from "../components/CompactPost";
import "./styles.css";
import { getAllPosts, getUsersByIds } from "../../api/postCalls";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import InputSearch from "../../components/InputSearch";
import { includesInsensitive } from "./utils";

const PostList = () => {
  const [usersData, setUsersData] = useState<User[]>();
  const [postsData, setPostsData] = useState<Post[]>();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE
  );
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setRequestStatus(RequestStatus.LOADING);

    getAllPosts()
      .then((posts) => {
        setPostsData(posts);
        const userIds = posts.map(({ userId }) => userId);

        return getUsersByIds(userIds);
      })
      .then((users) => {
        setUsersData(users);
        setRequestStatus(RequestStatus.OK);
      })
      .catch(() => setRequestStatus(RequestStatus.ERROR));
  }, []);

  if (
    requestStatus === RequestStatus.IDLE ||
    requestStatus === RequestStatus.LOADING
  ) {
    //if ([RequestStatus.IDLE, RequestStatus.LOADING].includes(requestStatus)) {
    return (
      <div className="postList">
        <LoadingSpinner />
      </div>
    );
  }

  if (requestStatus === RequestStatus.ERROR) {
    return (
      <div className="postList">
        <ErrorPlaceholder />
      </div>
    );
  }

  const filteredPosts =
    postsData?.filter((postData) => {
      const userData = usersData?.find(({ id }) => id === postData.userId);

      const name = userData?.name || "";
      const username = userData?.username || "";

      //const { name, username } = userData ?? { name: "", username: "" };

      const searchMatchesName = includesInsensitive(name, searchInput);
      const searchMatchesUsername = includesInsensitive(username, searchInput);

      return searchMatchesName || searchMatchesUsername;
    }) || [];

  return (
    <div className="postList">
      <InputSearch
        placeholder="Search"
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value)}
      />
      {filteredPosts.map((postData) => {
        const userData = usersData?.find(({ id }) => id === postData.userId);
        const { id, body } = postData;

        return (
          <Link key={id} to={`post/${id}`} relative="path">
            <CompactPost
              account={`@${userData?.username}`}
              name={userData?.name || ""}
              text={body}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;

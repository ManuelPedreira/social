import CompactPost from "../components/CompactPost";
import "./styles.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import InputSearch from "../../components/InputSearch";
import usePostsList from "../../api/usePostsList";
import { useState } from "react";
import { RequestStatus } from "../../api/postTypes";
import { Link } from "react-router-dom";

const PostList = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { postsData, usersData, requestStatus } = usePostsList(searchInput);

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

  return (
    <div className="postList">
      <InputSearch
        placeholder="Search"
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value)}
      />
      {postsData.map((postData) => {
        const userData = usersData.find(({ id }) => id === postData.userId);
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

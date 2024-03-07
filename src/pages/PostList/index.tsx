import CompactPost from "../components/CompactPost";
import "./styles.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import usePostsList from "../../api/usePostsList";
import { useState } from "react";
import { Pagination, RequestStatus } from "../../api/postTypes";
import { Link } from "react-router-dom";
import PostListHeader from "../components/PostListHeader";

const PostList = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>();
  const { postsData, usersData, requestStatus } = usePostsList(
    searchInput,
    pagination
  );

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
      <PostListHeader
        filter={searchInput}
        onFilterChange={(filter) => setSearchInput(filter)}
        pagination={pagination}
        onPaginationChange={(paginationData) => setPagination(paginationData)}
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

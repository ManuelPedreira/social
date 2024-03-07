import "./styles.css";
import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";
import { Pagination } from "../../api/postTypes";
import PostListHeader from "./components/PostListHeader";
import PostListResult from "./components/PostListResult";

const PostList = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>({});
  const { postsData, usersData, requestStatus } = usePostsList(
    searchInput,
    pagination
  );

  return (
    <div className="postList">
      <PostListHeader
        filter={searchInput}
        onFilterChange={(filter) => setSearchInput(filter)}
        pagination={pagination}
        onPaginationChange={(paginationData) => setPagination(paginationData)}
      />
      <PostListResult
        postsData={postsData}
        usersData={usersData}
        requestStatus={requestStatus}
      />
    </div>
  );
};

export default PostList;

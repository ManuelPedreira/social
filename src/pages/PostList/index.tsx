import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";
import { Pagination } from "../../api/postTypes";
import PostListHeader from "./components/PostListHeader";
import PostListResult from "./components/PostListResult";
import { PostListContainer } from "./PostList.styled";

const PostList = () => {
  const [filter, setFilter] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>({});
  const { postsData, usersData, requestStatus } = usePostsList(
    filter,
    pagination
  );

  return (
    <PostListContainer>
      <PostListHeader
        filter={filter}
        setFilter={setFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
      <PostListResult
        postsData={postsData}
        usersData={usersData}
        requestStatus={requestStatus}
      />
    </PostListContainer>
  );
};

export default PostList;

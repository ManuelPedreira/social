import { useState } from "react";
import { Pagination } from "../../api/postTypes";
import PostListHeader from "./components/PostListHeader";
import PostListResult from "./components/PostListResult";
import { PostListContainer } from "./PostList.styled";
import NewPost from "../../components/NewPost";

const PostList = () => {
  const [filter, setFilter] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>({
    _limit: 10,
    _page: 1,
  });

  return (
    <PostListContainer>
      <PostListHeader
        filter={filter}
        setFilter={setFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
      {!filter ? <NewPost charsLimit={200} /> : null}
      <PostListResult pagination={pagination} filter={filter} />
    </PostListContainer>
  );
};

export default PostList;

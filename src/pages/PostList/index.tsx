import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";
import { Pagination, Post } from "../../api/postTypes";
import PostListHeader from "./components/PostListHeader";
import PostListResult from "./components/PostListResult";
import { PostListContainer } from "./PostList.styled";
import NewPost from "../../components/NewPost";

import useNewPost from "../../api/hooks/useNewPost";

const PostList = () => {
  const [filter, setFilter] = useState<string>("");
  const [pagination, setPagination] = useState<Pagination>({
    _limit: 10,
    _page: 1,
  });
  const [localPosts, setLocalPosts] = useState<Post[]>([]);

  const { postsData, usersData, requestStatus } = usePostsList(
    filter,
    pagination,
    localPosts
  );

  const { newPostText, setNewPostText, newPostRequestStatus, sendNewPost } =
    useNewPost(setLocalPosts);

  return (
    <PostListContainer>
      <PostListHeader
        filter={filter}
        setFilter={setFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
      {!filter ? (
        <NewPost
          postMessage={newPostText}
          onChangePostMessage={setNewPostText}
          charsLimit={200}
          status={newPostRequestStatus}
          onSendPost={sendNewPost}
        />
      ) : null}
      <PostListResult
        postsData={postsData}
        usersData={usersData}
        requestStatus={requestStatus}
      />
    </PostListContainer>
  );
};

export default PostList;

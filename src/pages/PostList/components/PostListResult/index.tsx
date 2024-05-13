import { Link } from "react-router-dom";
import { Pagination, Post } from "../../../../api/postTypes";
import ErrorPlaceholder from "../../../../components/ErrorPlaceholder";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { CenterElementContainer, StyledCompactPost } from "./PostListResult.styled";
import usePostList from "../../../../api/hooks/usePostList";
import useUserList from "../../../../api/hooks/useUserList";
import { includesInsensitive } from "../../../../utils";

type PostListResultProps = {
  filter: string;
  pagination: Pagination;
};

const PostListResult = ({ pagination, filter }: PostListResultProps) => {
  const {
    postList,
    isPending: isPostListPending,
    isError: isPostListError,
  } = usePostList(pagination);
  const {
    userList,
    isPending: isUserListPending,
    isError: isUserListError,
  } = useUserList(postList?.map(({ userId }) => userId));

  const getPostUserResults = () => {
    const postWithUsers = postList?.map((post) => {
      return {
        ...post,
        user: userList?.find(({ id }) => id === post.userId),
      };
    });

    return (filter ? getFilteredPost(postWithUsers) : postWithUsers) || [];
  };

  const getFilteredPost = (postWithUsers?: Post[]) => {
    if (!postWithUsers) return [];

    return postWithUsers.filter((post) => {
      const { user, body } = post;
      const nameFilter = user && includesInsensitive(user.name, filter);
      const usernameFilter = user && includesInsensitive(user.username, filter);
      const bodyFilter = includesInsensitive(body, filter);
      return nameFilter || usernameFilter || bodyFilter;
    });
  };

  if (isPostListPending || isUserListPending) {
    return (
      <CenterElementContainer>
        <LoadingSpinner />
      </CenterElementContainer>
    );
  }

  if (isPostListError || isUserListError) {
    return (
      <CenterElementContainer>
        <ErrorPlaceholder />
      </CenterElementContainer>
    );
  }

  return getPostUserResults().map((post) => {
    const userData = userList?.find(({ id }) => id === post.userId);
    const { id, body, coments_count } = post;

    return (
      <Link key={id} to={`post/${id}`} relative="path">
        <StyledCompactPost
          account={`@${userData?.username}`}
          name={userData?.name || ""}
          text={body}
          commentsCount={coments_count}
        />
      </Link>
    );
  });
};

export default PostListResult;

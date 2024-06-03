import { useNavigate, useParams } from "react-router-dom";
import DetailedPostHeader from "./components/DetailedPostHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import { CenterElementContainer, PostDetailedContainer } from "./PostDetail.styled";
import Comments from "../../components/Comments";
import DetailedPost from "./components/DetailedPost";
import usePost from "../../api/hooks/usePost";
import useUser from "../../api/hooks/useUser";
import usePostComments from "../../api/hooks/usePostComments";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { post, isPending: isPostPending, isError: isPostError } = usePost(postId);
  const { user, isPending: isUserPending, isError: isUserError } = useUser(post?.userId);
  const {
    comments,
    isPending: isCommentsPending,
    isError: isCommentsError,
  } = usePostComments(postId);

  if (isPostPending || isUserPending || isCommentsPending) {
    return (
      <PostDetailedContainer>
        <DetailedPostHeader onClick={() => navigate("/")} />
        <CenterElementContainer>
          <LoadingSpinner />
        </CenterElementContainer>
      </PostDetailedContainer>
    );
  }

  if (isPostError || isUserError || isCommentsError) {
    return (
      <PostDetailedContainer>
        <DetailedPostHeader onClick={() => navigate("/")} />
        <CenterElementContainer>
          <ErrorPlaceholder />{" "}
        </CenterElementContainer>
      </PostDetailedContainer>
    );
  }

  return (
    <PostDetailedContainer>
      <DetailedPostHeader onClick={() => navigate("/")} />
      <DetailedPost
        account={`@${user?.username}`}
        name={user?.name || ""}
        text={post?.body || ""}
      />
      <Comments commentsData={comments || []} />
    </PostDetailedContainer>
  );
};

export default PostDetail;

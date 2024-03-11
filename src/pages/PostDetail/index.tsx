import { useNavigate, useParams } from "react-router-dom";
import usePostAndComments from "../../api/hooks/usePostAndComments";
import { RequestStatus } from "../../api/postTypes";
import DetailedPostHeader from "./components/DetailedPostHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import {
  CenterElementContainer,
  PostDetailedPlaceholderContainer,
} from "./PostDetailPlaceholder.styled";
import Comments from "../../components/Comments";
import DetailedPost from "./components/DetailedPost";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { postData, userData, commentsData, overallRequestStatus } =
    usePostAndComments(Number(postId));

  if (
    overallRequestStatus.includes(RequestStatus.IDLE) ||
    overallRequestStatus.includes(RequestStatus.LOADING)
  ) {
    return (
      <PostDetailedPlaceholderContainer>
        <DetailedPostHeader onClick={() => navigate("/")} />
        <CenterElementContainer>
          <LoadingSpinner />
        </CenterElementContainer>
      </PostDetailedPlaceholderContainer>
    );
  }

  if (overallRequestStatus.includes(RequestStatus.ERROR)) {
    return (
      <PostDetailedPlaceholderContainer>
        <DetailedPostHeader onClick={() => navigate("/")} />
        <CenterElementContainer>
          <ErrorPlaceholder />{" "}
        </CenterElementContainer>
      </PostDetailedPlaceholderContainer>
    );
  }

  return (
    <PostDetailedPlaceholderContainer>
      <DetailedPostHeader onClick={() => navigate("/")} />
      <DetailedPost
        account={`@${userData?.username}`}
        name={userData?.name || ""}
        text={postData?.body || ""}
      />
      <Comments commentsData={commentsData} />
    </PostDetailedPlaceholderContainer>
  );
};

export default PostDetail;

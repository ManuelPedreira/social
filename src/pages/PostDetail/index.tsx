import { useNavigate, useParams } from "react-router-dom";
import usePostAndComments from "../../api/hooks/usePostAndComments";
import { RequestStatus } from "../../api/postTypes";
import DetailedPostHeader from "./components/DetailedPostHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import {
  CenterElementContainer,
  PostDetailedContainer,
} from "./PostDetail.styled";
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
      <PostDetailedContainer>
        <DetailedPostHeader onClick={() => navigate("/")} />
        <CenterElementContainer>
          <LoadingSpinner />
        </CenterElementContainer>
      </PostDetailedContainer>
    );
  }

  if (overallRequestStatus.includes(RequestStatus.ERROR)) {
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
        account={`@${userData?.username}`}
        name={userData?.name || ""}
        text={postData?.body || ""}
      />
      <Comments commentsData={commentsData} />
    </PostDetailedContainer>
  );
};

export default PostDetail;

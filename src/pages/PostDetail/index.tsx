import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { RequestStatus } from "../../api/postTypes";
import DetailedPost from "../components/DetailedPost";
import Comments from "../components/Comments";
import DetailedPostHeader from "../components/DetailedPostHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import usePostAndComments from "../../api/usePostAndComments";

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
      <div className="postDetail">
        <DetailedPostHeader onClick={() => navigate("/")} />
        <LoadingSpinner />
      </div>
    );
  }

  if (overallRequestStatus.includes(RequestStatus.ERROR)) {
    return (
      <div className="postDetail">
        <DetailedPostHeader onClick={() => navigate("/")} />
        <ErrorPlaceholder />{" "}
      </div>
    );
  }

  return (
    <div className="postDetail">
      <DetailedPostHeader onClick={() => navigate("/")} />
      <DetailedPost
        account={`@${userData?.username}`}
        name={userData?.name || ""}
        text={postData?.body || ""}
      />
      <Comments commentsData={commentsData} />
    </div>
  );
};

export default PostDetail;

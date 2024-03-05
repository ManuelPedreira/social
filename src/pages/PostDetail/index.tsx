import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCommentsByPostId,
  getPostById,
  getUserById,
} from "../../api/postCalls";
import { Comment, Post, User, RequestStatus } from "../../api/postTypes";
import DetailedPost from "../components/DetailedPost";
import Comments from "../components/Comments";
import DetailedPostHeader from "../components/DetailedPostHeader";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId: stringPostId } = useParams();
  const postId = Number(stringPostId);

  const [postData, setPostData] = useState<Post>();
  const [userData, setUserData] = useState<User>();
  const [commentsData, setCommentsData] = useState<Comment[]>();

  const [postRequestStatus, setPostRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE
  );
  const [commentsRequestStatus, setCommentsRequestStatus] =
    useState<RequestStatus>(RequestStatus.IDLE);

  const getPostData = () => {
    setPostRequestStatus(RequestStatus.LOADING);

    getPostById(postId)
      .then((post) => {
        setPostData(post);

        return getUserById(post.userId);
      })
      .then((user) => {
        setUserData(user);
        setPostRequestStatus(RequestStatus.OK);
      })
      .catch(() => setPostRequestStatus(RequestStatus.ERROR));
  };

  const getCommentsData = () => {
    setCommentsRequestStatus(RequestStatus.LOADING);

    getCommentsByPostId(postId)
      .then((comments) => {
        setCommentsData(comments);
        setCommentsRequestStatus(RequestStatus.OK);
      })
      .catch(() => setCommentsRequestStatus(RequestStatus.ERROR));
  };

  useEffect(() => {
    getPostData();
    getCommentsData();
  }, []);

  const overallRequestStatus = [postRequestStatus, commentsRequestStatus];

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

  const { body } = postData!;
  const { username, name } = userData!;

  return (
    <div className="postDetail">
      <DetailedPostHeader onClick={() => navigate("/")} />
      <DetailedPost account={`@${username}`} name={name} text={body} />
      <Comments commentsData={commentsData!} />
    </div>
  );
};

export default PostDetail;

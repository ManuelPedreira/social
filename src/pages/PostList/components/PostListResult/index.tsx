import { Link } from "react-router-dom";
import { Post, RequestStatus, User } from "../../../../api/postTypes";
import ErrorPlaceholder from "../../../../components/ErrorPlaceholder";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import {
  CenterElementContainer,
  StyledCompactPost,
} from "./PostListResult.styled";

type PostListResultProps = {
  postsData: Post[];
  usersData: User[];
  requestStatus: RequestStatus;
};

const PostListResult = ({
  postsData,
  usersData,
  requestStatus,
}: PostListResultProps) => {
  if (
    requestStatus === RequestStatus.IDLE ||
    requestStatus === RequestStatus.LOADING
  ) {
    //if ([RequestStatus.IDLE, RequestStatus.LOADING].includes(requestStatus)) {
    return (
      <CenterElementContainer>
        <LoadingSpinner />
      </CenterElementContainer>
    );
  }

  if (requestStatus === RequestStatus.ERROR) {
    return (
      <CenterElementContainer>
        <ErrorPlaceholder />
      </CenterElementContainer>
    );
  }

  return postsData.map((postData) => {
    const userData = usersData.find(({ id }) => id === postData.userId);
    const { id, body } = postData;

    return (
      <Link key={id} to={`post/${id}`} relative="path">
        <StyledCompactPost
          account={`@${userData?.username}`}
          name={userData?.name || ""}
          text={body}
        />
      </Link>
    );
  });
};

export default PostListResult;

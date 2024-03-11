import { Comment } from "../../api/postTypes";
import {
  CommentsPlaceholderContainer,
  StyledCompactPost,
} from "./CommentsPlaceholder.styled";

const Comments = ({ commentsData }: { commentsData: Comment[] }) => {
  const formatText = (text?: string): string => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  };

  return (
    <CommentsPlaceholderContainer>
      {commentsData.map((commentData) => {
        const { id, body, email } = commentData;
        const [name, username] = String(email).split("@");
        const account = formatText(String(username).split(".")[0]);

        return (
          <StyledCompactPost
            key={id}
            account={`@${account}`}
            name={name}
            text={formatText(body)}
          />
        );
      })}
    </CommentsPlaceholderContainer>
  );
};

export default Comments;

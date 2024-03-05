import { Comment } from "../../../api/postTypes";
import CompactPost from "../CompactPost";
import "./styles.css";

const Comments = ({ commentsData }: { commentsData: Comment[] }) => {
  const formatText = (text?: string): string => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  };

  return (
    <div className="comments">
      {commentsData.map((commentData) => {
        const { id, body, email } = commentData;
        const [name, username] = String(email).split("@");
        const account = formatText(String(username).split(".")[0]);

        return (
          <CompactPost
            key={id}
            account={`@${account}`}
            name={name}
            text={formatText(body)}
          />
        );
      })}
    </div>
  );
};

export default Comments;

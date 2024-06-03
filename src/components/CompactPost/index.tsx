import CommentSVG from "../../ui/svg/CommentSVG";
import {
  CommentsCounter,
  CompactPostContainer,
  InfoContainer,
  StyledProfileIcon,
  UserAccount,
  UserContainer,
  UserName,
} from "./CompactPost.styled";

type PostProps = {
  icon?: string;
  name: string;
  account: string;
  text: string;
  commentsCount?: number;
  className?: string;
};

const formatText = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

const CompactPost = ({ icon, name, account, text, commentsCount, className }: PostProps) => {
  return (
    <CompactPostContainer className={className}>
      <StyledProfileIcon imageSrc={icon} colorByText={name} />
      <div>
        <UserContainer>
          <UserName>{name}</UserName>
          <UserAccount>{account}</UserAccount>
        </UserContainer>
        <span>{formatText(text)}</span>
        <InfoContainer>
          <CommentsCounter>
            <CommentSVG />
            {commentsCount ? commentsCount : null}
          </CommentsCounter>
        </InfoContainer>
      </div>
    </CompactPostContainer>
  );
};

export default CompactPost;

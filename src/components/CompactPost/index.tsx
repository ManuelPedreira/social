import {
  CompactPostContainer,
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
  className?: string;
};

const formatText = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

const CompactPost = ({ icon, name, account, text, className }: PostProps) => {
  return (
    <CompactPostContainer className={className}>
      <StyledProfileIcon imageSrc={icon} colorByText={name} />
      <div>
        <UserContainer>
          <UserName>{name}</UserName>
          <UserAccount>{account}</UserAccount>
        </UserContainer>
        <span>{formatText(text)}</span>
      </div>
    </CompactPostContainer>
  );
};

export default CompactPost;

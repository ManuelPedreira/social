import {
  CompactPostPlaceholderContainer,
  ProfileIconContainer,
  UserAccountContainer,
  UserContainer,
  UserNameContainer,
} from "./CompactPostPlaceholder.styled";

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
    <CompactPostPlaceholderContainer className={className}>
      <ProfileIconContainer imageSrc={icon} colorByText={name} />
      <div>
        <UserContainer>
          <UserNameContainer>{name}</UserNameContainer>
          <UserAccountContainer>{account}</UserAccountContainer>
        </UserContainer>
        <span>{formatText(text)}</span>
      </div>
    </CompactPostPlaceholderContainer>
  );
};

export default CompactPost;

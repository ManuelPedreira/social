import {
  BodyContainer,
  DetailedPlaceholderContainer,
  HeaderContainer,
  ProfileIconContainer,
  UserAccountContainer,
  UserContainer,
  UserNameContainer,
} from "./DetailedPostPlaceholder.styled";

type PostProps = {
  icon?: string;
  name: string;
  account: string;
  text: string;
};

const formatText = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

const DetailedPost = ({ icon, name, account, text }: PostProps) => {
  return (
    <DetailedPlaceholderContainer>
      <HeaderContainer>
        <ProfileIconContainer imageSrc={icon} colorByText={name} />
        <UserContainer>
          <UserNameContainer>{name}</UserNameContainer>
          <UserAccountContainer>{account}</UserAccountContainer>
        </UserContainer>
      </HeaderContainer>
      <BodyContainer>{formatText(text)}</BodyContainer>
    </DetailedPlaceholderContainer>
  );
};

export default DetailedPost;

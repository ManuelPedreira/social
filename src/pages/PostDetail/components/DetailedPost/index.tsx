import {
  BodyContainer,
  DetailedPlaceholderContainer,
  HeaderContainer,
  StyledProfileIcon,
  UserAccount,
  UserContainer,
  UserName,
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
        <StyledProfileIcon imageSrc={icon} colorByText={name} />
        <UserContainer>
          <UserName>{name}</UserName>
          <UserAccount>{account}</UserAccount>
        </UserContainer>
      </HeaderContainer>
      <BodyContainer>{formatText(text)}</BodyContainer>
    </DetailedPlaceholderContainer>
  );
};

export default DetailedPost;

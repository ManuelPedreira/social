import {
  BodyContainer,
  DetailedPostContainer,
  HeaderContainer,
  StyledProfileIcon,
  UserAccount,
  UserContainer,
  UserName,
} from "./DetailedPost.styled";

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
    <DetailedPostContainer>
      <HeaderContainer>
        <StyledProfileIcon imageSrc={icon} colorByText={name} />
        <UserContainer>
          <UserName>{name}</UserName>
          <UserAccount>{account}</UserAccount>
        </UserContainer>
      </HeaderContainer>
      <BodyContainer>{formatText(text)}</BodyContainer>
    </DetailedPostContainer>
  );
};

export default DetailedPost;

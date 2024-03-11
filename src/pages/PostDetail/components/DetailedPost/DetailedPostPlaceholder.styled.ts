import styled from "styled-components";
import ProfileIcon from "../../../../components/ProfileIcon";

export const DetailedPlaceholderContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 0.7em;
  padding: 0.5em 1em 2em 1em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  flex-shrink: 0;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2px;
`;

export const UserName = styled.span`
  font-weight: 700;
`;

export const UserAccount = styled.span`
  color: #71767b;
`;

export const BodyContainer = styled.span`
  font-size: 17px;
`;

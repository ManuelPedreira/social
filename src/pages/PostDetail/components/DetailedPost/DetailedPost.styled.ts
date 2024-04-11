import styled from "styled-components";
import ProfileIcon from "../../../../components/ProfileIcon";

export const DetailedPostContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.5rem 1rem 2rem 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
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
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const UserAccount = styled.span`
  color: ${({ theme }) => theme.color.text.darker};
`;

export const BodyContainer = styled.span`
  font-size: 1.1rem;
`;

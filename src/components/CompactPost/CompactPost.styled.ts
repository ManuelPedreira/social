import styled from "styled-components";
import ProfileIcon from "../ProfileIcon";

export const CompactPostContainer = styled.div`
  display: flex;
  text-align: left;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.background.main};
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  padding-bottom: 2px;
`;

export const UserName = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const UserAccount = styled.span`
  color: ${({ theme }) => theme.color.text.darker};
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  flex-shrink: 0;
`;

export const InfoContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;

  * {
    color: ${({ theme }) => theme.color.primary.light};
  }
`;

export const CommentsCounter = styled.div`
  width: 25%;
  height: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

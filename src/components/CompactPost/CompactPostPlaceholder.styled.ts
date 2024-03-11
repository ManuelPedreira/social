import styled from "styled-components";
import ProfileIcon from "../ProfileIcon";

export const CompactPostPlaceholderContainer = styled.div`
  display: flex;
  text-align: left;
  gap: 0.5em;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 0.3em;
  padding-bottom: 2px;
`;

export const UserNameContainer = styled.span`
  font-weight: 700;
`;

export const UserAccountContainer = styled.span`
  color: #71767b;
`;

export const ProfileIconContainer = styled(ProfileIcon)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  flex-shrink: 0;
`;

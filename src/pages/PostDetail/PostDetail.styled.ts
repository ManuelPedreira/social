import styled from "styled-components";

export const PostDetailedContainer = styled.div`
  max-width: 600px;
  border-left: 1px solid ${({ theme }) => theme.color.primary.main};
  border-right: 1px solid ${({ theme }) => theme.color.primary.main};
  height: 100vh;
`;

export const CenterElementContainer = styled.div`
  padding: 4rem 0;
  width: 600px;
`;

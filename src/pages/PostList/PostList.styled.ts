import styled from "styled-components";

export const PostListContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 600px;
  border-left: 1px solid ${({ theme }) => theme.color.primary.main};
  border-right: 1px solid ${({ theme }) => theme.color.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
`;

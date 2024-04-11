import styled from "styled-components";
import CompactPost from "../CompactPost";

export const CommentsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
`;

export const StyledCompactPost = styled(CompactPost)`
  border-top: 1px solid ${({ theme }) => theme.color.primary.main};
  padding: 1rem 1rem 1.2rem 1rem;
`;

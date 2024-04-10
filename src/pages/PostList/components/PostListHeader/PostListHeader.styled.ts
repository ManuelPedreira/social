import styled from "styled-components";
import SearchInput from "../../../../components/SearchInput";
import PaginationNavigator from "../../../../components/PaginationNavigator";
import { PostListHeaderMode } from ".";

export const PostListHeaderContainer = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
`;

export const StyledSearchInput = styled(SearchInput)`
  flex-grow: 1;
`;

type StyledPaginationNavigatorProps = {
  visualizationMode: PostListHeaderMode;
};

export const StyledPaginationNavigator = styled(
  PaginationNavigator
)<StyledPaginationNavigatorProps>`
  width: ${({ visualizationMode }) =>
    visualizationMode === PostListHeaderMode.SEARCH ? "3.1rem" : "15rem"};

  transition: width 0.2s;
  border-radius: 30px;
  overflow: hidden;
`;

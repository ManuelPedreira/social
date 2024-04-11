import { Pagination } from "../../../../api/postTypes";
import ThemeSwitch from "../../../../components/ThemeSwitch";
import {
  PostListHeaderContainer,
  StyledPaginationNavigator,
  StyledSearchInput,
} from "./PostListHeader.styled";

type PostListHeaderProps = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
};

const PostListHeader = ({
  filter,
  setFilter,
  pagination,
  setPagination,
}: PostListHeaderProps) => {
  const getVisualizationMode = () => {
    if (pagination._limit) return PostListHeaderMode.PAGINATION;
    return PostListHeaderMode.SEARCH;
  };

  return (
    <PostListHeaderContainer>
      <StyledSearchInput
        placeholder="Search"
        value={filter}
        onChange={({ target }) => {
          if (pagination._limit) setPagination({});
          setFilter(target.value);
        }}
      />
      <StyledPaginationNavigator
        visualizationMode={getVisualizationMode()}
        pagination={pagination}
        setPagination={setPagination}
      />
      <ThemeSwitch />
    </PostListHeaderContainer>
  );
};

export default PostListHeader;

export const enum PostListHeaderMode {
  SEARCH = "search",
  PAGINATION = "pagination",
}

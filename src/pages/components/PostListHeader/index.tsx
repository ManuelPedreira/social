import { Pagination } from "../../../api/postTypes";
import SearchInput from "../../../components/SearchInput";
import PagesNavigator from "../PagesNavigator";
import "./styles.css";

type PostListHeaderProps = {
  filter: string;
  pagination?: Pagination;
  mode?: postListHeaderMode;
  onFilterChange?: (value: string) => void;
  onPaginationChange?: (pagination: Pagination) => void;
  onModeChange?: (mode: postListHeaderMode) => void;
};

const PostListHeader = ({
  filter = "",
  pagination,
  mode = postListHeaderMode.SEARCH,
  onFilterChange,
  onPaginationChange,
  onModeChange,
}: PostListHeaderProps) => {
  return (
    <div className={`postListHeader ${mode}`}>
      <SearchInput
        placeholder="Search"
        value={filter}
        onChange={({ target }) =>
          onFilterChange && onFilterChange(target.value)
        }
      />
      <PagesNavigator />
    </div>
  );
};

export default PostListHeader;

export const enum postListHeaderMode {
  SEARCH = "search",
  PAGINATION = "pagination",
}

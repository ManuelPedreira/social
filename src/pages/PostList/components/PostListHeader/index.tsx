import { Pagination } from "../../../../api/postTypes";
import SearchInput from "../../../../components/SearchInput";
import PagesNavigator from "../../../../components/PagesNavigator";
import "./styles.css";

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
    if (pagination._limit) return postListHeaderMode.PAGINATION;
    return postListHeaderMode.SEARCH;
  };

  return (
    <div className={`postListHeader ${getVisualizationMode()}`}>
      <SearchInput
        placeholder="Search"
        className="searchInput"
        value={filter}
        onChange={({ target }) => {
          if (pagination._limit) setPagination({});
          setFilter(target.value);
        }}
      />
      <PagesNavigator pagination={pagination} setPagination={setPagination} />
    </div>
  );
};

export default PostListHeader;

export const enum postListHeaderMode {
  SEARCH = "search",
  PAGINATION = "pagination",
}

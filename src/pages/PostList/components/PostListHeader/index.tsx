import { useState } from "react";
import { Pagination } from "../../../../api/postTypes";
import SearchInput from "../../../../components/SearchInput";
import PagesNavigator from "../../../../components/PagesNavigator";
import "./styles.css";

type PostListHeaderProps = {
  filter: string;
  onFilterChange: (value: string) => void;
  pagination: Pagination;
  onPaginationChange: (pagination: Pagination) => void;
};

const PostListHeader = ({
  filter = "",
  onFilterChange,
  pagination,
  onPaginationChange,
}: PostListHeaderProps) => {
  const [visualizationMode, setVisualizationMode] =
    useState<postListHeaderMode>(postListHeaderMode.SEARCH);

  const handleVisualizatorModeChange = (mode: postListHeaderMode) => {
    if (visualizationMode !== mode) {
      if (mode === postListHeaderMode.SEARCH) onPaginationChange({});
      else if (mode === postListHeaderMode.PAGINATION) onFilterChange("");

      console.log(mode);
      setVisualizationMode(mode);
    }
  };

  return (
    <div className={`postListHeader ${visualizationMode}`}>
      <SearchInput
        placeholder="Search"
        className="searchInput"
        value={filter}
        onChange={({ target }) => {
          handleVisualizatorModeChange(postListHeaderMode.SEARCH);
          onFilterChange(target.value);
        }}
      />
      <PagesNavigator
        pagination={pagination}
        onPaginationChange={(paginationData) => {
          if (paginationData._limit) {
            handleVisualizatorModeChange(postListHeaderMode.PAGINATION);
          } else {
            handleVisualizatorModeChange(postListHeaderMode.SEARCH);
          }
          onPaginationChange(paginationData);
        }}
      />
    </div>
  );
};

export default PostListHeader;

export const enum postListHeaderMode {
  SEARCH = "search",
  PAGINATION = "pagination",
}

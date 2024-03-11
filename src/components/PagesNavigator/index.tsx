import ElementInput from "../ElementInput";
import ArrorSVG, { Direction } from "../svg/ArrorSVG";
import "./styles.css";
import { Pagination } from "../../api/postTypes";
import ElementButton from "../ElementButton";

type PagesNavigatorProps = {
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
};

const PagesNavigator = ({
  pagination,
  setPagination: setPagination,
}: PagesNavigatorProps) => {
  const setPage = (newPage: number) => {
    setPagination((currentValue) => {
      if (!currentValue._limit) return {};

      return {
        ...currentValue,
        _page: newPage && newPage > 0 ? newPage : 1,
      };
    });
  };

  const setLimit = (newLimit?: number) => {
    setPagination((currentValue) => {
      if (!newLimit) return {};

      return {
        ...currentValue,
        _page: currentValue._page ? currentValue._page : 1,
        _limit: newLimit,
      };
    });
  };

  const setNextLimit = () => {
    switch (pagination._limit) {
      case 0 || undefined:
        setLimit(5);
        break;
      case 5:
        setLimit(10);
        break;
      case 10:
        setLimit(20);
        break;
      case 20:
        setLimit(50);
        break;
      default:
        setLimit(0);
        break;
    }
  };

  return (
    <div className="pagesNavigator">
      <ElementButton
        onClick={() => {
          setPage(pagination._page ? pagination._page - 1 : 1);
        }}
        disabled={
          !pagination._limit || !pagination._page || pagination._page <= 1
        }
      >
        <ArrorSVG direction={Direction.LEFT} />
      </ElementButton>
      <ElementInput
        className="paginationInput"
        value={pagination._limit ? String(pagination._page || "") : ""}
        onChange={({ target }) => setPage(Number(target.value))}
      />
      <ElementButton
        onClick={() => {
          setPage(pagination._page ? pagination._page + 1 : 1);
        }}
        disabled={!pagination._limit}
      >
        <ArrorSVG direction={Direction.RIGHT} />
      </ElementButton>
      <ElementButton onClick={setNextLimit}>
        <span>{pagination._limit ? pagination._limit : "All"}</span>
      </ElementButton>
    </div>
  );
};

export default PagesNavigator;

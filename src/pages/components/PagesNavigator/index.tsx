import ElementButton from "../../../components/ElementButton";
import ElementInput from "../../../components/ElementInput";
import ArrorSVG, { Direction } from "../../../components/svg/ArrorSVG";
import "./styles.css";
import { Pagination } from "../../../api/postTypes";
import { useEffect, useState } from "react";

type PagesNavigatorProps = {
  pagination: Pagination;
  onPaginationChange: (pagination: Pagination) => void;
};

const PagesNavigator = ({
  pagination,
  onPaginationChange,
}: PagesNavigatorProps) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(0);

  useEffect(() => {
    if (limit) {
      if (pagination._page !== page || pagination._limit !== limit) {
        onPaginationChange({
          _page: page,
          _limit: limit,
        });
      }
    } else if (pagination._limit) {
      onPaginationChange({});
    }
  }, [page, limit]);

  useEffect(() => {
    if (pagination._page !== page || pagination._limit !== limit) {
      setPage(pagination._page ? pagination._page : 1);
      setLimit(pagination._limit ? pagination._limit : 0);
    }
  }, [pagination]);

  const setNextLimit = () => {
    switch (limit) {
      case 0:
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
          setPage((currentValue) =>
            currentValue && currentValue > 1 ? currentValue - 1 : 1
          );
        }}
        disabled={!limit || page <= 1}
      >
        <ArrorSVG direction={Direction.LEFT} />
      </ElementButton>
      <ElementInput
        className="paginationInput"
        value={limit ? String(page || "") : ""}
        placeholder="1"
        onChange={({ target }) => setPage(Number(target.value))}
      />
      <ElementButton
        onClick={() => {
          setPage((currentValue) => (currentValue ? currentValue + 1 : 1));
        }}
        disabled={!limit}
      >
        <ArrorSVG direction={Direction.RIGHT} />
      </ElementButton>
      <ElementButton onClick={setNextLimit}>
        <span>{limit ? limit : "All"}</span>
      </ElementButton>
    </div>
  );
};

export default PagesNavigator;

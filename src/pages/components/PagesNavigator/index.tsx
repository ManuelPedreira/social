import { useState } from "react";
import ElementButton from "../../../components/ElementButton";
import ElementInput from "../../../components/ElementInput";
import ArrorSVG, { Direction } from "../../../components/svg/ArrorSVG";
import "./styles.css";

const PagesNavigator = () => {
  const [postLimit, setPostLimit] = useState();

  return (
    <div className="pagesNavigator">
      <ElementButton>
        <ArrorSVG direction={Direction.LEFT} />
      </ElementButton>
      <ElementInput className="paginationInput" />
      <ElementButton>
        <ArrorSVG direction={Direction.RIGHT} />
      </ElementButton>
      <ElementButton>
        <span>All</span>
      </ElementButton>
    </div>
  );
};

export default PagesNavigator;

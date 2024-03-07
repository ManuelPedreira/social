import "./styles.css";
import ElementButton from "../../../components/ElementButton";
import ArrorSVG, { Direction } from "../../../components/svg/ArrorSVG";

type DetailedPostHeaderProps = {
  onClick?: React.MouseEventHandler;
};

const DetailedPostHeader = ({ onClick }: DetailedPostHeaderProps) => {
  return (
    <div className="postHeader">
      <ElementButton onClick={onClick}>
        <ArrorSVG direction={Direction.LEFT} />
      </ElementButton>
      <span className="postHeaderText">Post</span>
    </div>
  );
};

export default DetailedPostHeader;

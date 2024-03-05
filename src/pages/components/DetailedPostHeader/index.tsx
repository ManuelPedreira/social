import "./styles.css";
import ElementButton from "../../../components/ElementButton";
import BackArrorSVG from "../../../components/svg/BackArrorSVG";

type DetailedPostHeaderProps = {
  onClick?: React.MouseEventHandler;
};

const DetailedPostHeader = ({ onClick }: DetailedPostHeaderProps) => {
  return (
    <div className="postHeader">
      <ElementButton onClick={onClick}>
        <BackArrorSVG />
      </ElementButton>
      <span className="postHeaderText">Post</span>
    </div>
  );
};

export default DetailedPostHeader;

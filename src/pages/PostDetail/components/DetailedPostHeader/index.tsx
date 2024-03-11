import ElementButton from "../../../../components/ElementButton";
import ArrorSVG, { Direction } from "../../../../components/svg/ArrorSVG";
import {
  DetailedPostHeaderPlaceholderContainer,
  HeaderTextContainer,
} from "./DetailedPostHeaderPlaceholder.styled";

type DetailedPostHeaderProps = {
  onClick?: React.MouseEventHandler;
};

const DetailedPostHeader = ({ onClick }: DetailedPostHeaderProps) => {
  return (
    <DetailedPostHeaderPlaceholderContainer>
      <ElementButton onClick={onClick}>
        <ArrorSVG direction={Direction.LEFT} />
      </ElementButton>
      <HeaderTextContainer>Post</HeaderTextContainer>
    </DetailedPostHeaderPlaceholderContainer>
  );
};

export default DetailedPostHeader;

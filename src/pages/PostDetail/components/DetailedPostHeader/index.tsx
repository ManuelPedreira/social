import ElementButton from "../../../../components/ElementButton";
import ArrorSVG, { Direction } from "../../../../components/svg/ArrorSVG";
import {
  DetailedPostHeaderPlaceholderContainer,
  HeaderText,
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
      <HeaderText>Post</HeaderText>
    </DetailedPostHeaderPlaceholderContainer>
  );
};

export default DetailedPostHeader;

import Button from "../../../../components/Button";
import ArrorSVG from "../../../../components/svg/ArrorSVG";
import {
  DetailedPostHeaderContainer,
  HeaderText,
} from "./DetailedPostHeader.styled";

type DetailedPostHeaderProps = {
  onClick?: React.MouseEventHandler;
};

const DetailedPostHeader = ({ onClick }: DetailedPostHeaderProps) => {
  return (
    <DetailedPostHeaderContainer>
      <Button onClick={onClick}>
        <ArrorSVG direction="left" />
      </Button>
      <HeaderText>Post</HeaderText>
    </DetailedPostHeaderContainer>
  );
};

export default DetailedPostHeader;

import styled from "styled-components";
import ProfileIcon from "../ProfileIcon";
import Button from "../Button";
import TextArea from "../TextArea";

export const NewPostContainer = styled.label`
  display: flex;
  gap: 0.7em;
  padding: 0.8em 1em;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  gap: 0.3em;
`;

export const StyledIcon = styled(ProfileIcon)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`;

export const StyledTextArea = styled(TextArea)`
  font-size: 22px;
  font-weight: 300;
  line-height: 26px;
  margin: 0.2em 0 0 0;
`;

export const HorizontalDividerBar = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #2f3336;
`;

export const VerticalDividerBar = styled.div`
  height: 100%;
  width: 1px;
  border: 0;
  border-left: 1px solid #2f3336;
`;

export const BottomAreaContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1em;
`;

type LimitCounterProps = {
  charsLeft?: number;
};

export const LimitCounter = styled.span<LimitCounterProps>`
  color: ${({ charsLeft }) => {
    if (charsLeft === undefined) return "#666";
    if (charsLeft <= 0) return "red";
    if (charsLeft < 30) return "yellow";
    return "#666";
  }};

  transition: 0.5s all;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  align-self: end;
  background-color: #1d9bf0;
  font-weight: 700;
  padding: 0.5em 1em;

  &:hover {
    background-color: #1984cc;
  }

  &:disabled,
  &:disabled:hover {
    background-color: #125988;
  }
`;

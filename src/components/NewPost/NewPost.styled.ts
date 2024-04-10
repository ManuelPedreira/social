import styled from "styled-components";
import ProfileIcon from "../ProfileIcon";
import Button from "../Button";
import TextArea from "../TextArea";
import SpinerSVG from "../svg/SpinnerSVG";
import { getColorPalette, getCountColor } from "./NewPost.utils";

export const NewPostContainer = styled.label`
  display: flex;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  gap: 0.3rem;
`;

export const StyledIcon = styled(ProfileIcon)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`;

export const StyledTextArea = styled(TextArea)`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.slim};
  line-height: 1.2rem;
  margin: 0.2rem 0 0 0;
`;

export const HorizontalDividerBar = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.color.primary.main};
`;

export const VerticalDividerBar = styled.hr`
  height: 100%;
  margin: 0;
  border: 0;
  border-left: 1px solid ${({ theme }) => theme.color.primary.main};
`;

export const BottomAreaContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

type LimitCounterProps = {
  $charsCount?: number;
};

export const LimitCounter = styled.span<LimitCounterProps>`
  color: ${({ $charsCount, theme }) => getCountColor(theme, $charsCount)};
  transition: 0.5s all;
`;

export const StyledSpinner = styled(SpinerSVG)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.text.main};
`;

type StyledButtonProps = {
  showError?: boolean;
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  align-self: end;
  background-color: ${({ showError, theme }) =>
    getColorPalette(theme, showError).dark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 0.6rem 1rem;

  &:hover {
    background-color: ${({ showError, theme }) =>
      getColorPalette(theme, showError).main};
    color: ${({ theme }) => theme.color.text.lighter};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${({ showError, theme }) =>
      getColorPalette(theme, showError).darker};
  }
`;

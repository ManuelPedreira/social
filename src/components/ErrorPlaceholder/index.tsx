import {
  ErrorPlaceholderContainer,
  ErrorPlaceholderTitle,
  IconContainer,
  TextIcon,
} from "./ErrorPlaceholder.styled";

function ErrorPlaceholder() {
  return (
    <ErrorPlaceholderContainer>
      <IconContainer>
        <TextIcon>!</TextIcon>
      </IconContainer>
      <ErrorPlaceholderTitle>Error</ErrorPlaceholderTitle>
    </ErrorPlaceholderContainer>
  );
}

export default ErrorPlaceholder;

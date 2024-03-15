import {
  ErrorPlaceholderContainer,
  ErrorTitle,
  IconContainer,
  TextIcon,
} from "./ErrorPlaceholder.styled";

function ErrorPlaceholder() {
  return (
    <ErrorPlaceholderContainer>
      <IconContainer>
        <TextIcon>!</TextIcon>
      </IconContainer>
      <ErrorTitle>Error</ErrorTitle>
    </ErrorPlaceholderContainer>
  );
}

export default ErrorPlaceholder;

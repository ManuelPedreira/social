import {
  LoadingSpinnerPlaceholderContainer,
  StyledSpinner,
} from "./LoadingSpinnerPlaceholder.styled";

function LoadingSpinner() {
  return (
    <LoadingSpinnerPlaceholderContainer>
      <StyledSpinner />
    </LoadingSpinnerPlaceholderContainer>
  );
}

export default LoadingSpinner;

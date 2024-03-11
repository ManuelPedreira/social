import {
  LoadingSpinnerPlaceholderContainer,
  SpinnerSVGContainer,
} from "./LoadingSpinnerPlaceholder.styled";

function LoadingSpinner() {
  return (
    <LoadingSpinnerPlaceholderContainer>
      <SpinnerSVGContainer />
    </LoadingSpinnerPlaceholderContainer>
  );
}

export default LoadingSpinner;

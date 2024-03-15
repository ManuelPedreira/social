import styled from "styled-components";

export const StyledSpinnerSVG = styled.svg`
  transform-origin: center;
  animation: spinner_effect 0.75s infinite linear;

  @keyframes spinner_effect {
    100% {
      transform: rotate(360deg);
    }
  }
`;

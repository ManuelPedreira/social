import styled from "styled-components";
import SpinerSVG from "../svg/SpinnerSVG";

export const LoadingSpinnerPlaceholderContainer = styled.div`
  margin: auto;
`;

export const StyledSpinner = styled(SpinerSVG)`
  width: 30px;
  height: 30px;
  fill: white;
`;

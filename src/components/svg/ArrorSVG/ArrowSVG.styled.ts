import styled from "styled-components";
import { Direction } from ".";

type StyledArrowSVGProps = {
  direction: Direction;
};

const degrees: Record<Direction, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

export const StyledArrowSVG = styled.svg<StyledArrowSVGProps>`
  fill: white;
  width: 20px;
  background-color: transparent;

  transform: rotate(${({ direction }) => degrees[direction]}deg);
`;

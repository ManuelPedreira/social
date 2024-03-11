import styled from "styled-components";
import CompactPost from "../../../../components/CompactPost";

export const CompactPostContainer = styled(CompactPost)`
  padding: 1em 1em 1.2em 1em;
  transition: all 0.3s;
  outline: 1px solid #2f3336;

  &:hover {
    transform: scale(1.02);
    border-radius: 5px;
    box-shadow: 0 0 1em 0.1em rgb(29, 155, 240, 0.7);
    z-index: 100;
    outline: 1px solid #1d9bf0;
  }
`;

export const CenterElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

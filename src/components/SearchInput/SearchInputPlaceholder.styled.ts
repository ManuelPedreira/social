import styled from "styled-components";
import SearchIconSVG from "../svg/SearchIconSVG";

export const SearchIconSVGContainer = styled(SearchIconSVG)`
  width: 1.2em;
  flex-shrink: 0;
  background-color: transparent;

  &:focus-within {
    fill: #1d9bf0;
  }
`;

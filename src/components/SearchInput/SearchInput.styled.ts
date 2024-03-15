import styled from "styled-components";
import SearchIconSVG from "../svg/SearchIconSVG";
import Input from "../Input";

export const StyledInput = styled(Input)`
  &:focus-within {
    * {
      fill: #1d9bf0;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIconSVG)`
  width: 1.2em;
  flex-shrink: 0;
  background-color: transparent;
`;

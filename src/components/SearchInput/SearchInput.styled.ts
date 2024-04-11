import styled from "styled-components";
import SearchIconSVG from "../svg/SearchIconSVG";
import Input from "../Input";

export const StyledInput = styled(Input)`
  &:focus-within {
    * {
      fill: ${({ theme }) => theme.color.secondary.main};
    }
  }
`;

export const StyledSearchIcon = styled(SearchIconSVG)`
  width: 1.2rem;
  flex-shrink: 0;
  background-color: transparent;
`;

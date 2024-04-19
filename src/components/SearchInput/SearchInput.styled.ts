import styled from "styled-components";

import Input from "../../ui/Input";
import SearchIconSVG from "../../ui/svg/SearchIconSVG";

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

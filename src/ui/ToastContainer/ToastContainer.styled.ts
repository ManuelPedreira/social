import styled from "styled-components";

export const StyledToastContainer = styled.div`
  display: flex;
  position: fixed;
  margin: 1rem;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 1rem;
  background-color: transparent;

  right: 0;
  bottom: 0;

  z-index: 1000;
`;

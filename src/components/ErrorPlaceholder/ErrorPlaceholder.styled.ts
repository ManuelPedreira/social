import styled from "styled-components";

export const ErrorPlaceholderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  margin: auto;
`;

export const IconContainer = styled.div`
  border: 4px solid ${({ theme }) => theme.color.text.main};
  border-radius: 40px;
  width: 50px;
  height: 50px;
`;

export const Text = styled.span`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: transparent;
`;

export const TextIcon = styled(Text)`
  position: relative;
  top: 12px;
`;

export const ErrorTitle = styled(Text)`
  margin: 20px 0;
`;

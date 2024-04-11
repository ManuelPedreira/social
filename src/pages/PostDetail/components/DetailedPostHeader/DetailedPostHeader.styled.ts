import styled from "styled-components";

export const DetailedPostHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  padding: 0.5rem 0.7rem;
`;

export const HeaderText = styled.span`
  color: ${({ theme }) => theme.color.text.main};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.3rem;
`;

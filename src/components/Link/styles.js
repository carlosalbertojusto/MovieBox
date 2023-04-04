import styled from "styled-components"

export const Container = styled.div`
  width: 11rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  a {
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.ROSE_700};
  }

  svg {
    font-size: 2rem;
    stroke: ${({ theme }) => theme.COLORS.ROSE_700};
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  svg {
    font-size: 2.4rem;
    stroke: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`

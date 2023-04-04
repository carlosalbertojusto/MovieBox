import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 4.4rem;
  }
`

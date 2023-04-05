import styled from "styled-components"

export const Container = styled.section`
  max-width: 100%;
  margin: 0 3.8rem 0 3.4rem;

  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.4rem;
`

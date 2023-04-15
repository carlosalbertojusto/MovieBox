import styled from "styled-components"

export const Container = styled.section`
  min-width: 126rem;
  display: flex;
  flex-direction: column;
  margin: 0 3.8rem 0 3.4rem;

  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`

export const Title = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem 4.4rem 2.5rem;
`

export const Movies = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ isTrailerList }) => (isTrailerList ? "4.5rem" : "8rem")};
`

export const MovieList = styled.div`
  max-width: 124rem;
  overflow: scroll;
  display: flex;
  align-items: center;
`

export const MovieBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 4.8rem;
    stroke: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`

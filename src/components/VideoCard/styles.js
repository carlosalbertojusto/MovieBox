import styled from "styled-components"

export const Container = styled.div`
  max-width: 45rem;
  height: 29rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  h1 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`

export const Play = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  top: 10rem;
  left: 20rem;
  svg {
    stroke: ${({ theme }) => theme.COLORS.WHITE};
    stroke-width: 1;
  }
`

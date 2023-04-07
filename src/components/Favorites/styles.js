import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 20.6rem;
  width: 3rem;
  height: 2.9rem;
  background: ${({ theme }) => theme.COLORS.GRAY_50};
  opacity: ${({ isArtist }) => (isArtist ? 0 : 1)};
  border-radius: 50rem;
  backdrop-filter: blur(1px);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.COLORS.GRAY_300};
    stroke: ${({ theme }) => theme.COLORS.GRAY_300} !important;
  }
`

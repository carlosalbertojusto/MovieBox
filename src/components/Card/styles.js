import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;
  height: 49rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 37rem;

  img {
    width: 25rem;
    height: 37rem;
    object-fit: cover;

    &:hover {
      cursor: pointer;
      filter: grayscale(0);
      transition: 700ms ease;
      transform: scale(1.1);
    }

    &:not(:hover) {
      filter: grayscale(1);
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 25rem;
  height: 11rem;

  span {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  h1 {
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`

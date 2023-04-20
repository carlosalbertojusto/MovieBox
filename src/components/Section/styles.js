import styled from "styled-components"

export const Container = styled.section`
  max-width: 100vw;
  height: ${({ isTrailerList }) => (isTrailerList ? "38rem" : "60rem")};
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
  height: 51rem;
  gap: ${({ isTrailerList }) => (isTrailerList ? "4.5rem" : "8rem")};
  transform: ${(props) => `translateX(-${props.transform * 79}%)`};
  transition: 700ms ease;
  scroll-behavior: smooth;
`

export const MovieList = styled.div`
  max-width: 124rem;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 1rem;
  }
`

export const MovieBox = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
  }

  svg {
    font-size: 4.8rem;
    stroke: ${({ theme }) => theme.COLORS.GRAY_500};

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`

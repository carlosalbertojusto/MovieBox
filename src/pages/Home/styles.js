import styled from "styled-components"
import Poster from "../../assets/johnwick.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 7rem;

  overflow-y: overlay;
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
export const Header = styled.header`
  width: 100%;
  height: 66rem;
  background: url(${Poster}) no-repeat top center;
  background-size: cover;
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DescriptionBox = styled.div`
  width: 40.5rem;
  height: 28.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  margin: 7.8rem 9.8rem;
`

export const PaginationBox = styled.div`
  position: relative;
  width: 3.6rem;
  height: 11rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
      cursor: pointer;
    }
    &:focus {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    &:nth-child(4) {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .line {
    position: absolute;
    left: -1.2rem;
    width: 2rem;
    height: 0.3rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.6rem;
  }
`

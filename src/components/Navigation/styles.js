import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.5rem 9.5rem;
  height: 8rem;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 700;
  }
`

export const Search = styled.div`
  width: 52.5rem;
  height: 3.6rem;
`

export const Menu = styled.div`
  width: 11.4rem;
  height: 3.6rem;

  display: flex;
  align-items: center;
  gap: 2.7rem;

  > a {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ROSE_700};

    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

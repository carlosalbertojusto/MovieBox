import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > .ratings {
    display: flex;
    align-items: center;
    gap: 3.4rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  > p {
    max-width: 30rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    width: 17rem;
    height: 3.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.6rem 1.6rem;

    background: ${({ theme }) => theme.COLORS.ROSE_700};
    border-radius: 0.6rem;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 700;
    text-transform: uppercase;

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${({ theme }) => theme.COLORS.WHITE};
      > polygon {
        fill: ${({ theme }) => theme.COLORS.ROSE_700};
      }
    }
  }
`

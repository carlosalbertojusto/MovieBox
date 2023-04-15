import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  width: 3.6rem;
  height: 11rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  > button {
    border: none;
    background: transparent;

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

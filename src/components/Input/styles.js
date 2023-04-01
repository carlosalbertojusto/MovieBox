import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  > input {
    width: 100%;
    border: none;

    background: transparent;
    padding: 0.6rem 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
    }
  }

  svg {
    stroke: ${({ theme }) => theme.COLORS.WHITE};
    margin-right: 1.2rem;
  }
`

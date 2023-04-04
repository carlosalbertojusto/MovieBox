import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 2rem;

  display: flex;
  justify-content: center;
  width: 7.9rem;
  height: 2.2rem;

  padding: 0.3rem 0.8rem;

  border-radius: 1.2rem;
  background: ${({ theme }) => theme.COLORS.GRAY_50};

  > span {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    text-transform: uppercase;
  }
`

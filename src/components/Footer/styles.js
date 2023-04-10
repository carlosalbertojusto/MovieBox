import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  a {
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`

export const Author = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
  span {
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`

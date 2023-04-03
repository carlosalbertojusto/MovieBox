import styled from "styled-components"

export const Container = styled.div`
  min-width: 100%;
  height: 49rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`

export const Image = styled.div`
  position: relative;
  width: 100%;
  max-height: 37rem;

  > .favorites {
    position: absolute;
    top: 1.6rem;
    right: 82%;
    width: 3rem;
    height: 2.9rem;
    background: ${({ theme }) => theme.COLORS.GRAY_50};
    border-radius: 50%;
    backdrop-filter: blur(1px);

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: 2rem;
      height: 2rem;
      fill: ${({ theme }) => theme.COLORS.GRAY_300};
      stroke: none;
    }
  }

  > .category {
    position: absolute;
    left: 0;
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

  > h1 {
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }

  > .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 1rem;
    }
  }
`

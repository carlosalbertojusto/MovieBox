import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ isArtist }) => (isArtist ? 0 : 1)};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`

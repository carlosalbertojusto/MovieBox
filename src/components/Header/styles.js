import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: 66rem;
  background: ${(props) => `url(${props.image})`} no-repeat top center;
  background-size: cover;
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

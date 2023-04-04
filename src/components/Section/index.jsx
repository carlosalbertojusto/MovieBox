import { Link } from "../Link"
import { Container, Wrapper } from "./styles"

export function Section({ title, children }) {
  return (
    <Container>
      <Wrapper>
        <h2>{title}</h2>
        <Link />
      </Wrapper>
      {children}
    </Container>
  )
}

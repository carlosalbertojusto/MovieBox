import { Container } from "./styles"

export function Category({ title, ...rest }) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  )
}

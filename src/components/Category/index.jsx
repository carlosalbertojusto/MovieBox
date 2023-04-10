import { Container } from "./styles"

export function Category({ title, isArtist = false, ...rest }) {
  return (
    <Container isArtist={isArtist} {...rest}>
      <span>{title}</span>
    </Container>
  )
}

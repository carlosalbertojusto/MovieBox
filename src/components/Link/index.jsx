import { Container } from "./styles"
import { FiChevronRight } from "react-icons/fi"

export function Link() {
  return (
    <Container>
      <a href="#">See more</a>
      <FiChevronRight />
    </Container>
  )
}

import { Link } from "../Link"
import { Container, Title, Movies, MovieList, MovieBox } from "./styles"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export function Section({ title, children }) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
        <Link />
      </Title>

      <MovieBox>
        <FiChevronLeft />
        <MovieList>
          <Movies>{children}</Movies>
        </MovieList>
        <FiChevronRight />
      </MovieBox>
    </Container>
  )
}

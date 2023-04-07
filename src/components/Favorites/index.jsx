import { Container } from "./styles"
import { FiHeart } from "react-icons/fi"

export function Favorites({ isArtist = false }) {
  return (
    <Container isArtist={isArtist}>
      <FiHeart />
    </Container>
  )
}

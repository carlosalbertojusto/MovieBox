import { Container, Wrapper } from "./styles"
import { Navigation, MoviesDescription, PaginationBox } from "../index"

export function Header({ image, onClick, data }) {
  return (
    <Container image={image}>
      <Navigation />
      <Wrapper>
        <MoviesDescription
          data={{
            title: data.title,
            ratingImdb: data.ratingImdb,
            ratingRt: data.ratingRt,
            description: data.description,
            image: data.image,
            alt: data.alt,
          }}
        />

        <PaginationBox onClick={onClick} />
      </Wrapper>
    </Container>
  )
}

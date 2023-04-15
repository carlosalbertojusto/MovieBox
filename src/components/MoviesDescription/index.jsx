import { Container } from "./styles"
import { Description } from "../index"

export function MoviesDescription({ data }) {
  return (
    <Container>
      <Description
        data={{
          title: data.title,
          ratingImdb: data.ratingImdb,
          ratingRt: data.ratingRt,
          description: data.description,
          image: data.image,
          alt: data.alt,
        }}
      />
    </Container>
  )
}

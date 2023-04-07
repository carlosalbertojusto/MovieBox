import { Container, Wrapper } from "./styles"

export function Rating({ logoImdb, ratingImdb, logoRt, ratingRt, isArtist = false }) {
  return (
    <Container isArtist={isArtist}>
      <Wrapper>
        <img src={logoImdb} alt="Logo do site de avaliações IMDB" />
        <span>{ratingImdb} / 100</span>
      </Wrapper>
      <Wrapper>
        <img src={logoRt} alt="Logo do site de avaliações Rotten Tomatoes" />
        <span>{ratingRt}%</span>
      </Wrapper>
    </Container>
  )
}

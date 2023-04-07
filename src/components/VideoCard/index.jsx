import { Container, ImageContainer, Play, Title } from "./styles"
import { FiPlayCircle } from "react-icons/fi"

export function VideoCard({ data, ...rest }) {
  return (
    <Container>
      <ImageContainer>
        <Play>
          <FiPlayCircle />
        </Play>
        <img src={data.image} alt={data.alt} />
      </ImageContainer>
      <Title>
        <h1>{data.title}</h1>
      </Title>
    </Container>
  )
}

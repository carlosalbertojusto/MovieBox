import { Container, ImageContainer, Play} from "./styles"
import { FiPlayCircle } from "react-icons/fi"

export function VideoCard({ data, ...rest }) {
  return (
    <Container>
      <ImageContainer>
        <Play>
          <FiPlayCircle id="play"/>
        </Play>
        <img src={data.image} alt={data.alt} />
      </ImageContainer> 
        <h1>{data.title}</h1>
    </Container>
  )
}

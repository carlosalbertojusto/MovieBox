import { Container, Description, Image } from "./styles"
import LogoImdb from "../../assets/imdb.png"
import LogoRottenTomatoes from "../../assets/rottentomatoe.png"
import { FiHeart } from "react-icons/fi"
export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Image>
        <div className="favorites">
          <FiHeart />
        </div>
        <div className="category">
          <span>{data.category}</span>
        </div>
        <img src={data.image} alt={data.alt} />
      </Image>
      <Description>
        <span>{data.releaseInfo}</span>
        <h1>{data.title}</h1>
        <div className="rating">
          <div>
            <img src={LogoImdb} alt="Logo do site de avaliações IMDB" />
            <span>{data.ratingImdb} / 100</span>
          </div>
          <div>
            <img
              src={LogoRottenTomatoes}
              alt="Logo do site de avaliações Rotten Tomatoes"
            />
            <span>{data.ratingRt}%</span>
          </div>
        </div>
        <span>{data.genres}</span>
      </Description>
    </Container>
  )
}

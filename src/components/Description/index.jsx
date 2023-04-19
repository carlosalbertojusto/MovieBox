import { Container } from "./styles"
import LogoImdb from "../../assets/imdb.png"
import LogoRottenTomatoes from "../../assets/rottentomatoe.png"
import { IoPlayCircle } from "react-icons/io5"

export function Description({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="ratings">
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
      <p>{data.description}</p>
      <button type="button">
        <IoPlayCircle />
        Watch trailer
      </button>
    </Container>
  )
}

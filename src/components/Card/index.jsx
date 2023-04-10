import { Container, Description, ImageContainer } from "./styles"

import { Favorites } from "../Favorites"
import { Category } from "../Category"
import { Rating } from "../Rating"

import LogoImdb from "../../assets/imdb.png"

import LogoRottenTomatoes from "../../assets/rottentomatoe.png"

export function Card({ data, isArtist = false, ...rest }) {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Favorites isArtist={data.artist} />

        <Category title={data.category} isArtist={data.artist} />

        <img src={data.image} alt={data.alt} />
      </ImageContainer>

      <Description>
        <span>{data.releaseInfo}</span>

        <h1>{data.title}</h1>

        <Rating
          isArtist={data.artist}
          logoImdb={LogoImdb}
          logoRt={LogoRottenTomatoes}
          ratingImdb={data.ratingImdb}
          ratingRt={data.ratingRt}
        />

        <span>{data.genres}</span>
      </Description>
    </Container>
  )
}

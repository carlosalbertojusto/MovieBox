import { Container, Description, ImageContainer } from "./styles"

import { Favorites } from "../Favorites"
import { Category } from "../Category"
import { Rating } from "../Rating"

import LogoImdb from "../../assets/imdb.png"

import LogoRottenTomatoes from "../../assets/rottentomatoe.png"

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Favorites />

        <Category title={data.category} />

        <img src={data.image} alt={data.alt} />
      </ImageContainer>

      <Description>
        <span>{data.releaseInfo}</span>

        <h1>{data.title}</h1>

        <Rating
          logoImdb={LogoImdb}
          logoRt={LogoRottenTomatoes}
          ratingImdb="86.0"
          ratingRt="97"
        />
        <span>{data.genres}</span>
      </Description>
    </Container>
  )
}

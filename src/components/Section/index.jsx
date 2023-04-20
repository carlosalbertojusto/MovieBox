import { Container, Title, Movies, MovieList, MovieBox } from "./styles"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"

import { Link, Card } from "../index"

export function Section({ title, isTrailerList = false, items }) {
  const [position, setPosition] = useState(0)

  const handleCarouselClick = (direction) => {
    const newPosition = direction === "prev" ? position - 1 : position + 1

    if (newPosition >= 0 && newPosition < items.length) {
      setPosition(newPosition)
    }
  }
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
        <Link />
      </Title>

      <MovieBox>
        <FiChevronLeft onClick={() => handleCarouselClick("prev")} />

        <MovieList>
          <Movies transform={position} isTrailerList={isTrailerList}>
            {items.map((item) => (
              <Card
                key={item.id}
                data={{
                  title: item.title,
                  ratingImdb: item.ratingImdb,
                  ratingRt: item.ratingRt,
                  category: item.category,
                  genres: item.genres,
                  releaseInfo: item.releaseInfo,
                  image: item.image,
                  alt: item.alt,
                  artist: item.artist,
                }}
              />
            ))}
          </Movies>
        </MovieList>

        <FiChevronRight onClick={() => handleCarouselClick("next")} />
      </MovieBox>
    </Container>
  )
}

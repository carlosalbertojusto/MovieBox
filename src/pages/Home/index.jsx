import { Container } from "./styles"

import { Card, Header, Section, VideoCard, Footer } from "../../components"

import {
  content,
  featuredCasts,
  movies,
  newArrivals,
  headerMovies,
} from "../../components/VideoCard/content"

import { useState, useEffect, useRef } from "react"

export function Home() {
  const [pagination, setPagination] = useState(1)
  const [imageMovie, setImageMovie] = useState("")

  const [titleMovie, setTitleMovie] = useState("")
  const [ratingImdb, setratingImdb] = useState("")
  const [ratingRt, setRatingRt] = useState("")
  const [description, setDescription] = useState("")
  const [alt, setAlt] = useState("")
  const [position, setPosition] = useState(0)
  const carouselRef = useRef(null)

  function handleHeaderMovies() {
    if (pagination <= 5) {
      headerMovies.map((item) => {
        const { title, alt, description, id, image, ratingImdb, ratingRt } =
          item

        if (pagination === id) {
          setTitleMovie(title)
          setratingImdb(ratingImdb)
          setRatingRt(ratingRt)
          setDescription(description)
          setAlt(alt)
          setImageMovie(image)
        }
        setPagination(pagination + 1)
      })
    } else setPagination(1)
  }

  useEffect(() => {
    handleHeaderMovies()
  }, [])

  return (
    <Container>
      <Header
        image={imageMovie}
        onClick={handleHeaderMovies}
        data={{
          title: titleMovie,
          ratingImdb,
          ratingRt,
          description,
          image: imageMovie,
          alt,
        }}
      />

      <Section title="Featured Movie" items={movies} />

      <Section title="New Arrival" items={newArrivals} />

      <Section title="Exclusive Videos" isTrailerList items={content} />

      <Section title="Featured Casts" items={featuredCasts} />

      <Footer />
    </Container>
  )
}

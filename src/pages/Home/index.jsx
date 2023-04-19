import { Container } from "./styles"

import { Card, Header, Section, VideoCard, Footer } from "../../components"

import {
  content,
  featuredCasts,
  movies,
  newArrivals,
  headerMovies,
} from "../../components/VideoCard/content"

import { useState, useEffect } from "react"

export function Home() {
  const [pagination, setPagination] = useState(1)
  const [imageMovie, setImageMovie] = useState("")

  const [titleMovie, setTitleMovie] = useState("")
  const [ratingImdb, setratingImdb] = useState("")
  const [ratingRt, setRatingRt] = useState("")
  const [description, setDescription] = useState("")
  const [alt, setAlt] = useState("")

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
          alt: alt,
        }}
      />

      <Section title="Featured Movie">
        {movies.map((item) => (
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
            }}
          />
        ))}
      </Section>
      <Section title="New Arrival">
        {newArrivals.map((item) => (
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
            }}
          />
        ))}
      </Section>
      <Section title="Exclusive Videos" isTrailerList>
        {content.map((item) => (
          <VideoCard
            key={item.id}
            data={{ title: item.title, image: item.image }}
          />
        ))}
      </Section>
      <Section title="Featured Casts">
        {featuredCasts.map((item) => (
          <Card
            key={item.id}
            data={{
              title: item.title,
              image: item.image,
              artist: item.artist,
            }}
          />
        ))}
      </Section>
      <Footer />
    </Container>
  )
}

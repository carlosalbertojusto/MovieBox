import { Container, Wrapper } from "./styles"

import {
  Card,
  Header,
  Section,
  VideoCard,
  Footer,
  MoviesDescription,
  PaginationBox,
} from "../../components"

import {
  content,
  featuredCasts,
  movies,
  newArrivals,
  headerMovies,
  imagesMovies,
} from "../../components/VideoCard/content"
import { useState } from "react"

export function Home() {
  let [pagination, setPagination] = useState(2)
  let [imageMovie, setImageMovie] = useState()

  function handlePagination(e) {
    imagesMovies.map((item) => {
      let image = item.image
      let id = item.id

      if (pagination == id) {
        imageMovie = image
        return imageMovie
      }
      console.log({ image, id, imageMovie })
    })
    console.log(pagination)
  }

  return (
    <Container>
      <Header
        image={imageMovie}
        onClick={(e) => handlePagination()}
        data={{
          title: imageMovie.title,
          ratingImdb: imageMovie.ratingImdb,
          ratingRt: imageMovie.ratingRt,
          description: imageMovie.description,
          image: imageMovie.image,
          alt: imageMovie.alt,
        }}
        onChange={(event) => setPagination(event.target.value)}
      />

      {/* {headerMovies.map((item) => (
          <Wrapper key={item.id}>
            <MoviesDescription
              data={{
                title: item.title,
                ratingImdb: item.ratingImdb,
                ratingRt: item.ratingRt,
                description: item.description,
                image: item.image,
                alt: item.alt,
              }}
            />

            <PaginationBox
              onClick={(e) => handleHeaderImages(e.target.value)}
            />
          </Wrapper>
          
        ))} */}

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

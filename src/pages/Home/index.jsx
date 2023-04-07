import {
  Container,
  Header,
  DescriptionBox,
  PaginationBox,
  Wrapper,
} from "./styles"

import {
  Card,
  Description,
  Navigation,
  Section,
  VideoCard,
  Footer,
} from "../../components"
import {
  content,
  featuredCasts,
  movies,
  newArrivals,
} from "../../components/VideoCard/content"

export function Home() {
  return (
    <Container>
      <Header>
        <Navigation />

        <Wrapper>
          <DescriptionBox>
            <Description
              data={{
                title: "John Wick 3 : Parabellum",
                ratingImdb: "86.0",
                ratingRt: "97",
                description:
                  "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
              }}
            />
          </DescriptionBox>

          <PaginationBox>
            <div className="line"></div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </PaginationBox>
        </Wrapper>
      </Header>

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

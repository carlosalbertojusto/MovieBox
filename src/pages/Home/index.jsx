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
  Input,
  Link,
  Navigation,
  Section,
} from "../../components"

import { images } from "../../assets/index"

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
        <Card
          data={{
            title: "Stranger things",
            ratingImdb: "86.0",
            ratingRt: "97",
            category: "Tv series",
            genres: "Action, Adventure, Horror ",
            releaseInfo: "USA, 2016 - Current",
            image: images.ImageStrangerThings,
            alt: "Banner da série de televisão stranger things",
          }}
        />
        <Card
          data={{
            title: "Batman Begins",
            ratingImdb: "82.0",
            ratingRt: "70",
            category: "Movie",
            genres: "Action, Adventure ",
            releaseInfo: "USA, 2005",
            image: images.ImageBatman,
            alt: "Banner do filme Batman begins",
          }}
        />
        <Card
          data={{
            title: "Spider-Man : Into The Spider Verse",
            ratingImdb: "84.0",
            ratingRt: "87",
            category: "Movie",
            genres: "Animation, Action, Adventure",
            releaseInfo: "USA, 2018",
            image: images.ImageSpiderman,
            alt: "Banner do filme Spider-Man : Into The Spider Verse",
          }}
        />
        <Card
          data={{
            title: "Dunkirk",
            ratingImdb: "78.0",
            ratingRt: "94",
            category: "Movie",
            genres: "Action, Drama, History ",
            releaseInfo: "USA, 2017",
            image: images.ImageDunkirk,
            alt: "Banner do filme Dunkirk",
          }}
        />
      </Section>
    </Container>
  )
}

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
  VideoCard
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
            category: "Tv Series",
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
            category: "Movies",
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
            category: "Movies",
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
            category: "Movies",
            genres: "Action, Drama, History ",
            releaseInfo: "USA, 2017",
            image: images.ImageDunkirk,
            alt: "Banner do filme Dunkirk",
          }}
        />
      </Section>

      <Section title="New Arrival">
        <Card
          data={{
            title: "Dune",
            ratingImdb: "84.0",
            ratingRt: "75",
            category: "Movies",
            genres: "Action, Adventure, Drama ",
            releaseInfo: "USA, 2021",
            image: images.ImageDune,
            alt: "Banner do filme Dune",
          }}
        />
        <Card
          data={{
            title: "No Time To Die",
            ratingImdb: "76.0",
            ratingRt: "68",
            category: "Movies",
            genres: "Action, Adventure, Thriller ",
            releaseInfo: "USA, 2021",
            image: images.ImageNoTimeToDie,
            alt: "Banner do filme 007: No Time To Die",
          }}
        />
        <Card
          data={{
            title: "Shang-Chi and the Legend of the Ten Rings",
            ratingImdb: "79.0",
            ratingRt: "71",
            category: "Movies",
            genres: "Action, Action, Fantasy",
            releaseInfo: "USA, 2021",
            image: images.ImageShangchi,
            alt: "Banner do filme Shang-Chi and the Legend of the Ten Rings",
          }}
        />
        <Card
          data={{
            title: "Don't Breathe 2",
            ratingImdb: "61.0",
            ratingRt: "46",
            category: "Movies",
            genres: "Action, Drama, Horror ",
            releaseInfo: "USA, 2017",
            image: images.ImageDontBreathe,
            alt: "Banner do filme Don't Breathe 2",
          }}
        />
      </Section>

      <Section title="Exclusive Videos" isTrailerList>
        <VideoCard
          data={{
            title: "Lamb (2021) Trailer",
            image: images.ImageLamb,
          }}
        />
        <VideoCard
          data={{
            title: "The Suicide Squad : John Cena Interview",
            image: images.ImageSuicideSquad,
          }}
        />
        <VideoCard
          data={{
            title: "Will there be a new era of horror movie?",
            image: images.ImageWillThereBe,
          }}
        />
      </Section>
    </Container>
  )
}

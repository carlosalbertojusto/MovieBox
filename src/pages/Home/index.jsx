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

import StrangerThings from "../../assets/strangerthings.png"

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
            image: StrangerThings,
            alt: "Banner da série de televisão stranger things",
          }}
        />
      </Section>

    </Container>
  )
}

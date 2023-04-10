import { images } from "../../assets/index"

const content = [
  {
    id: 1,
    title: "Lamb (2021) Trailer",
    image: images.ImageLamb,
  },
  {
    id: 2,
    title: "The Suicide Squad : John Cena Interview",
    image: images.ImageSuicideSquad,
  },
  {
    id: 3,
    title: "Will there be a new era of horror movie?",
    image: images.ImageWillThereBe,
  },
]

const movies = [
  {
    id: 1,
    title: "Stranger things",
    ratingImdb: "86.0",
    ratingRt: "97",
    category: "Tv Series",
    genres: "Action, Adventure, Horror ",
    releaseInfo: "USA, 2016 - Current",
    image: images.ImageStrangerThings,
    alt: "Banner da série de televisão stranger things",
  },
  {
    id: 2,
    title: "Batman Begins",
    ratingImdb: "82.0",
    ratingRt: "70",
    category: "Movies",
    genres: "Action, Adventure ",
    releaseInfo: "USA, 2005",
    image: images.ImageBatman,
    alt: "Banner do filme Batman begins",
  },
  {
    id: 3,
    title: "Spider-Man : Into The Spider Verse",
    ratingImdb: "84.0",
    ratingRt: "87",
    category: "Movies",
    genres: "Animation, Action, Adventure",
    releaseInfo: "USA, 2018",
    image: images.ImageSpiderman,
    alt: "Banner do filme Spider-Man : Into The Spider Verse",
  },
  {
    id: 4,
    title: "Dunkirk",
    ratingImdb: "78.0",
    ratingRt: "94",
    category: "Movies",
    genres: "Action, Drama, History ",
    releaseInfo: "USA, 2017",
    image: images.ImageDunkirk,
    alt: "Banner do filme Dunkirk",
  },
]

const newArrivals = [
  {
    id: 1,
    title: "Dune",
    ratingImdb: "84.0",
    ratingRt: "75",
    category: "Movies",
    genres: "Action, Adventure, Drama ",
    releaseInfo: "USA, 2021",
    image: images.ImageDune,
    alt: "Banner do filme Dune",
  },
  {
    id: 2,
    title: "No Time To Die",
    ratingImdb: "76.0",
    ratingRt: "68",
    category: "Movies",
    genres: "Action, Adventure, Thriller ",
    releaseInfo: "USA, 2021",
    image: images.ImageNoTimeToDie,
    alt: "Banner do filme 007: No Time To Die",
  },
  {
    id: 3,
    title: "Shang-Chi and the Legend of the Ten Rings",
    ratingImdb: "79.0",
    ratingRt: "71",
    category: "Movies",
    genres: "Action, Action, Fantasy",
    releaseInfo: "USA, 2021",
    image: images.ImageShangchi,
    alt: "Banner do filme Shang-Chi and the Legend of the Ten Rings",
  },
  {
    id: 4,
    title: "Don't Breathe 2",
    ratingImdb: "61.0",
    ratingRt: "46",
    category: "Movies",
    genres: "Action, Drama, Horror ",
    releaseInfo: "USA, 2017",
    image: images.ImageDontBreathe,
    alt: "Banner do filme Don't Breathe 2",
  },
]

const featuredCasts = [
  {
    id: 1,
    title: "Keanu Reeves",
    image: images.ImageKeanu,
    artist: true,
  },
  {
    id: 2,
    title: "Ryan Reynolds",
    image: images.ImageRyan,
    artist: true,
  },
  {
    id: 3,
    title: "Timothée Chalamet",
    image: images.ImageThimothee,
    artist: true,
  },
  {
    id: 4,
    title: "Chloë Grace Moretz",
    image: images.ImageChloe,
    artist: true,
  },
]

export { content, featuredCasts, newArrivals, movies }

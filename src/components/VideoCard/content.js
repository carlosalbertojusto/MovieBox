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
    title: "Stranger Things",
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
  {
    id: 5,
    title: "Dwayne Johnson",
    image: images.ImageDwayneTheRock,
    artist: true,
  },
  {
    id: 6,
    title: "Scarlett Johansson",
    image: images.ImageScarlettJohansson,
    artist: true,
  },
  {
    id: 7,
    title: "Tom Holland",
    image: images.ImageTomHolland,
    artist: true,
  },
  {
    id: 8,
    title: "Gal Gadot",
    image: images.ImageGalGadot,
    artist: true,
  },
  {
    id: 9,
    title: "Florence Pugh",
    image: images.ImageFlorencePugh,
    artist: true,
  },
  {
    id: 10,
    title: "Benedict Cumberbatch",
    image: images.ImageBenedictCumberbatch,
    artist: true,
  },
]

const headerMovies = [
  {
    id: 1,
    title: "John Wick 3 : Parabellum",
    ratingImdb: "86.0",
    ratingRt: "97",
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    image: images.ImageJohnWick,
    alt: "Banner do filme John Wick 3 : Parabellum",
  },
  {
    id: 2,
    title: "Red Notice",
    ratingImdb: "63.0",
    ratingRt: "36",
    description:
      "Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.",
    image: images.ImageRedNotice,
    alt: "Banner do filme Red Notice",
  },
  {
    id: 3,
    title: "Black Widow",
    ratingImdb: "67.0",
    ratingRt: "79",
    description:
      "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.",
    image: images.ImageBlackWidow,
    alt: "Banner do filme Black Widow",
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    ratingImdb: "82.0",
    ratingRt: "93",
    description:
      "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.",
    image: images.ImageNoWayHome,
    alt: "Banner do filme Spider-Man: No way home",
  },
  {
    id: 5,
    title: "The Matrix Resurrections ",
    ratingImdb: "57.0",
    ratingRt: "63",
    description:
      "Se o Sr. Anderson, conhecido como Neo, aprendeu alguma coisa é que a escolha, mesmo sendo uma ilusão, é a única maneira de sair - ou entrar - da Matrix. Ele sabe o que precisa fazer, mas ainda não descobriu que a Matrix está mais forte e perigosa.",
    image: images.ImageMatrix,
    alt: "Banner do filme Matrix Ressurections",
  },
]

const imagesMovies = [
  {
    id: 1,
    image: images.ImageJohnWick,
  },
  {
    id: 2,
    image: images.ImageRedNotice,
  },
  {
    id: 3,
    image: images.ImageBlackWidow,
  },
  {
    id: 4,
    image: images.ImageNoWayHome,
  },
  {
    id: 5,
    image: images.ImageMatrix,
  },
]

export {
  content,
  featuredCasts,
  newArrivals,
  movies,
  headerMovies,
  imagesMovies,
}

import { SocialMedia } from "../SocialMedia"
import { Container, Content, Author } from "./styles"

export function Footer() {
  return (
    <Container>
      <SocialMedia />
      <Content>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </Content>
      <Author>
        <span>© 2021 MovieBox by Adriana Eka Prayudha</span>
      </Author>
    </Container>
  )
}

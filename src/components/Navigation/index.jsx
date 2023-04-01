import { Container, Brand, Search, Menu } from "./styles"
import LogoBrand from "../../assets/logotv.png"
import { FiSearch } from "react-icons/fi"
import { HiMenuAlt4 } from "react-icons/hi"
import { Input } from "../Input"

export function Navigation() {
  return (
    <Container>
      <Brand>
        <img src={LogoBrand} alt="Imagem da logomarca" />
        <h1>MovieBox</h1>
      </Brand>
      <Search>
        <Input placeholder="What do you want to watch?" icon={FiSearch} />
      </Search>

      <Menu>
        <a href="#">Sign in</a>
        <div>
          <HiMenuAlt4 />
        </div>
      </Menu>
    </Container>
  )
}

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

body{
  background-color: #Ffffff;
  font-size: 1.6rem;
}

body, button, input {
  font-family: 'DM Sans', serif;
  font-size: 16px;
  outline: none;
}

a{
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s
}

button:hover, a:hover {
  filter: brightness(0.9)
}
`

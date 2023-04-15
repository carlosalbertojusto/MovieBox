import { Container } from "./styles"

export function PaginationBox({ onClick, onChange }) {
  return (
    <Container onClick={onClick} onChange={onChange}>
      <div className="line"></div>
      <button type="button" value={1}>
        {" "}
        1{" "}
      </button>

      <button type="button" value={2}>
        {" "}
        2{" "}
      </button>

      <button type="button" value={3}>
        {" "}
        3{" "}
      </button>

      <button type="button" value={4}>
        {" "}
        4{" "}
      </button>

      <button type="button" value={5}>
        {" "}
        5{" "}
      </button>
    </Container>
  )
}

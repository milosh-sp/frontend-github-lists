import { render } from "@testing-library/react"
import App from "../App"

it("upper nav bar renders without crashing", () => {
  const { queryByTitle } = render(<App />)
  const container = queryByTitle("testContainer")
  expect(container).toBeInTheDocument()
})

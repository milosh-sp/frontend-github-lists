import { render } from "@testing-library/react"
import UpperNavBar from "../components/ui/UpperNavBar"

it("upper nav bar renders without crashing", () => {
  const { queryByTitle } = render(<UpperNavBar />)
  const navBar = queryByTitle("upperNavTest")
  expect(navBar).toBeInTheDocument()
})

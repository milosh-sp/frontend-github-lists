import React from "react"
import { Container } from "react-bootstrap"

import DataCardComponent from "./components/DataCardComponent"
import UpperNavBar from "./components/ui/UpperNavBar"

const App = () => {
  return (
    <>
      <UpperNavBar />
      <Container title="testContainer" fluid style={{ marginTop: "2%" }}>
        <DataCardComponent data-testid="testDataCardComponent" />
      </Container>
    </>
  )
}

export default App

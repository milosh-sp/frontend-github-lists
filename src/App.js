import React from 'react'
import { Container } from 'react-bootstrap'

import DataCardComponent from './components/DataCardComponent'
import UpperNavBar from './components/ui/UpperNavBar'

const App = () => {
  return (
    <>
      <UpperNavBar />
      <Container fluid style={{ marginTop: '2%' }}>
        <DataCardComponent />
      </Container>
    </>
  )
}

export default App

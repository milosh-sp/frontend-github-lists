import React from 'react'
import UpperNavBar from './components/ui/UpperNavBar'

import { Container } from 'react-bootstrap'
import DataCardComponent from './components/DataCardComponent'

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

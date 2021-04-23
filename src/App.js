import React from 'react'
import UpperNavBar from './components/ui/UpperNavBar'

import { Container } from 'react-bootstrap'
import RepoCard from './components/cardcomponents/RepoCard'

const App = () => {
  return (
    <>
      <UpperNavBar />
      <Container fluid style={{ marginTop: '2%' }}>
        <RepoCard
          repoTitle={'Repository'}
          repoDes={'JDSNJASNKJDFNAKSJNFJASNND'}
          repoStars={'123'}
          repoIssues={'12'}
          repoSubTime={'30'}
          ownerName={'Gagi'}
        />
      </Container>
    </>
  )
}

export default App

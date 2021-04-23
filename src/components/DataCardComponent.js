import React from 'react'
import { useAxiosGet } from './hooks/Requests'
import RepoCard from './cardcomponents/RepoCard'
import { Spinner } from 'react-bootstrap'

const DataCardComponent = () => {
  const url =
    'https://api.github.com/search/repositories?q=created:%3E2021-03-23&sort=stars&order=desc&page=2'

  let content = null

  let request = useAxiosGet(url)

  if (request.data) {
    content = request.data.items?.map((repo) => (
      <RepoCard
        ownerImage={repo.owner.avatar_url}
        repoTitle={repo.name}
        repoDes={repo.description}
        repoStars={repo.stargazers_count}
        repoIssues={repo.open_issues}
        repoSubTime={repo.pushed_at}
        ownerName={repo.owner.login}
      />
    ))
  }

  if (request.loading) {
    content = (
      <div className="text-center">
        <Spinner
          style={{ width: '10rem', height: '10rem', marginTop: '20rem' }}
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if (request.error) {
    content = (
      <div className="text-center h1">
        Something went wrong or server offline please reload the page
      </div>
    )
  }

  return <>{content}</>
}

export default DataCardComponent

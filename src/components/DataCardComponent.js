import { useState } from "react"
import { useAxiosGet } from "./hooks/Requests"
import RepoCard from "./cardcomponents/RepoCard"
import InfiniteScroll from "react-infinite-scroll-component"
import moment from "moment"

const DataCardComponent = () => {
  const [page, setPage] = useState(1)

  let dateFromNow = moment(moment().subtract(30, "days")).format("YYYY-MM-DD")

  const pageUrl = `https://api.github.com/search/repositories?q=created:%3E${dateFromNow}&sort=stars&order=desc&page=${page}`

  let content = null

  let request = useAxiosGet(pageUrl)

  if (request.repos) {
    content = (
      <InfiniteScroll
        dataLength={request.repos.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={
          <div style={{ textAlign: "center" }}>
            <strong>Loading data...</strong>
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center" }}>
            <div>You have reached the end of the page</div>
          </div>
        }
      >
        {request.repos.map((repo, key) => (
          <RepoCard
            key={key}
            ownerImage={repo.owner.avatar_url}
            repoTitle={repo.name}
            repoDes={repo.description}
            repoStars={repo.stargazers_count}
            repoIssues={repo.open_issues}
            repoSubTime={repo.created_at}
            ownerName={repo.owner.login}
          />
        ))}
      </InfiniteScroll>
    )
  }

  if (request.error) {
    return (
      <div className="text-center h1">
        Something went wrong or too many server requests or server is offline
        please reload the page
      </div>
    )
  }

  return <>{content}</>
}

export default DataCardComponent

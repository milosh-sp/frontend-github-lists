import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxiosGet = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios
      .get(url)
      .then((res) => {
        setRepos((repos) => [...repos, ...res.data.items])
        setLoading(false)
      })
      .catch((err) => {
        setError(true)
      })
  }, [url])

  return { loading, error, repos }
}

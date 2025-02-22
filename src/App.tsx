import { useEffect, useState } from 'react'

type UserData = {
  userId: Number
  id: Number
  title: String
  body: String
}

export default function App() {
  const [json, setJson] = useState<UserData[]>([])

  const fetchData = async () => {
    const res = await fetch(
      'https://test-gcp-2-458989743986.asia-south1.run.app/data'
    )
    if (!res.ok) {
      throw new Error('Response is not OK!')
    }
    const data = await res.json()
    setJson((prev) => [...prev, data])
  }
  console.log(json)
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>App</div>
      <h1>Total {json.length}</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
      <button onClick={fetchData}>Click to fetch</button>
    </div>
  )
}

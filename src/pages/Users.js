import { useParams } from 'react-router-dom'
export default () => (
  <div>
    <h2>Users List Page Placeholder</h2>
  </div>
)

export const UserId = () => {
  let { userId } = useParams()

  return (
    <div>
      <h1>User ID {userId} palce holder</h1>
    </div>
  )
}

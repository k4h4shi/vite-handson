import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>
        ページが見つかりません。<Link to="/">Home</Link> に戻れます。
      </p>
    </>
  )
}

export default NotFound

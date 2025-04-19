import { Link } from 'react-router-dom'
import { Post } from '../utils/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`}>
        <img src={post.imageUrl} alt={post.title} />
      </Link>
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <div className="post-meta">
        <span>By <Link to={`/profile/${post.author.uid}`}>{post.author.displayName}</Link></span>
        <span className="dot" />
        <span>{post.location}</span>
      </div>
      <p>{post.description}</p>
    </div>
  )
}

import { useParams } from 'react-router-dom'
import { mockUsers, mockPosts } from '../utils/mockData'
import PostCard from '../components/PostCard'

export default function Profile() {
  const { uid } = useParams()
  const user = mockUsers.find(u => u.uid === uid)
  const posts = mockPosts.filter(p => p.author.uid === uid)

  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>{user.displayName}'s Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Posts</h2>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}

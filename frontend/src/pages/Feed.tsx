import { useState } from 'react'
import { mockPosts } from '../utils/mockData'
import PostCard from '../components/PostCard'

export default function Feed() {
  const [posts] = useState(mockPosts)
  return (
    <div>
      <h1>Community Feed</h1>
      <p style={{ color: '#b2cdb2', marginBottom: '2em' }}>
        See what other tree lovers have discovered and shared!
      </p>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}

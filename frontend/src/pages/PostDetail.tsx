import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { mockPosts } from '../utils/mockData'
import Map from '../components/Map'
import CommentSection from '../components/CommentSection'

export default function PostDetail() {
  const { id } = useParams()
  const post = mockPosts.find(p => p.id === id)
  const [comments, setComments] = useState(post?.comments || [])

  if (!post) return <div>Post not found</div>

  return (
    <div>
      <h1 style={{ color: '#f8f8f8' }}>{post.title}</h1>
      <img
        src={post.imageUrl}
        alt={post.title}
        style={{
          width: '100%',
          maxWidth: 500,
          borderRadius: 8,
          border: '2px solid #7c5e3c',
          background: '#204020'
        }}
      />
      <p style={{ color: '#f8f8f8' }}>{post.description}</p>
      <Map location={post.location} />
      <CommentSection
        comments={comments}
        onAdd={text =>
          setComments([
            ...comments,
            { author: { displayName: 'You', uid: 'me', email: 'you@example.com' }, text }
          ])
        }
      />
    </div>
  )
}

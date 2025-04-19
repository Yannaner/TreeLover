import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { Comment } from '../utils/types'

export default function CommentSection({ comments, onAdd }: { comments: Comment[], onAdd: (text: string) => void }) {
  const [text, setText] = useState('')
  const { user } = useAuth()
  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>
            <b>{c.author.displayName}</b>: {c.text}
          </li>
        ))}
      </ul>
      {user && (
        <form onSubmit={e => { e.preventDefault(); if (text) { onAdd(text); setText('') } }}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="submit" style={{ marginLeft: 8 }}>Post</button>
        </form>
      )}
    </div>
  )
}

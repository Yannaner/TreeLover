import { useState } from 'react'

export default function UploadForm({ onSubmit }: { onSubmit: (data: { title: string, description: string, imageUrl: string, location: string }) => void }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [location, setLocation] = useState('')

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({ title, description, imageUrl, location }) }}>
      <div>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      </div>
      <div>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      </div>
      <div>
        <input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      </div>
      <div>
        <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      </div>
      <button type="submit" style={{ margin: 8 }}>Upload</button>
    </form>
  )
}

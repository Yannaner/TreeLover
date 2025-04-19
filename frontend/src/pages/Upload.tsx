import { useState } from 'react'
import UploadForm from '../components/UploadForm'

export default function Upload() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div>
      <h1>Share a New Tree</h1>
      {submitted ? (
        <div>Thank you for sharing!</div>
      ) : (
        <UploadForm onSubmit={() => setSubmitted(true)} />
      )}
    </div>
  )
}

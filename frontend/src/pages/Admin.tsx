import { useState } from 'react'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email === 'admin' && password === 'admin') {
      setIsAdmin(true)
      setError('')
    } else {
      setError('Invalid admin credentials')
    }
  }

  if (isAdmin) {
    return (
      <div>
        <h1>Admin Panel</h1>
        <p>Welcome, admin! (You can add admin features here.)</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <h1>Admin Login</h1>
      <input
        placeholder="Admin Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login as Admin</button>
      {error && <div style={{ color: '#e53e3e', marginTop: 12 }}>{error}</div>}
    </form>
  )
}

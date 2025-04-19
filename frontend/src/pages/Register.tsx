import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  return (
    <form onSubmit={e => { e.preventDefault(); register(email, password, displayName); navigate('/feed') }}>
      <h1>Register</h1>
      <input placeholder="Display Name" value={displayName} onChange={e => setDisplayName(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      <button type="submit" style={{ margin: 8 }}>Register</button>
    </form>
  )
}

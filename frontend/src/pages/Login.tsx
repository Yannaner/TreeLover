import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  return (
    <form onSubmit={e => { e.preventDefault(); login(email, password); navigate('/feed') }}>
      <h1>Login</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ margin: 8, padding: 8 }} />
      <button type="submit" style={{ margin: 8 }}>Login</button>
    </form>
  )
}

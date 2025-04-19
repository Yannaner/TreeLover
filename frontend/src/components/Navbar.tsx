import { Link } from 'react-router-dom'
import { useAuth } from '../utils/auth'

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            fontWeight: 900,
            fontSize: 30,
            letterSpacing: 2,
            marginRight: 36,
            background: 'linear-gradient(90deg, #7c5e3c 30%, #204020 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 8px #181c1f'
          }}
        >
          🌲 TreeLover
        </Link>
        <Link to="/feed">Feed</Link>
        <Link to="/upload">Upload</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to={`/profile/${user.uid}`}>{user.displayName || 'Profile'}</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

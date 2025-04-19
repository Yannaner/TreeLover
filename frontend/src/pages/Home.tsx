import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #204020 0%, #7c5e3c 100%)'
    }}>
      <div style={{
        background: 'rgba(32, 64, 32, 0.97)',
        border: '2px solid #7c5e3c',
        borderRadius: 24,
        boxShadow: '0 8px 32px #20402055',
        padding: '3em 2.5em',
        maxWidth: 520,
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Merriweather, serif',
          fontSize: '2.8em',
          marginBottom: '0.5em',
          letterSpacing: 1,
          background: 'linear-gradient(90deg, #4be04b 30%, #204020 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          <span role="img" aria-label="tree">🌲</span> TreeLover
        </h1>
        <p style={{
          color: '#e0e0e0',
          fontSize: '1.2em',
          marginBottom: '2.5em'
        }}>
          Discover, share, and discuss trees with a passionate community.<br />
          <span style={{ color: '#7c5e3c', fontWeight: 600 }}>
            Join the forest of knowledge and stories.
          </span>
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2em',
          alignItems: 'center'
        }}>
          <Link to="/feed" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              background: '#204020',
              color: '#fff',
              fontSize: '1.1em',
              padding: '0.9em 0',
              borderRadius: 10,
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: 0,
              boxShadow: 'none'
            }}>
              🌳 Explore the Feed
            </button>
          </Link>
          <Link to="/upload" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              background: '#7c5e3c',
              color: '#fff',
              fontSize: '1.1em',
              padding: '0.9em 0',
              borderRadius: 10,
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: 'none'
            }}>
              🌱 Share a Tree
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

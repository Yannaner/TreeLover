import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #e6f4ea 0%, #b7d7c9 100%)'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.96)',
        border: '2px solid #b7d7c9',
        borderRadius: 28,
        boxShadow: '0 8px 32px #b7d7c955',
        padding: '3em 2.5em',
        maxWidth: 520,
        width: '100%',
        textAlign: 'center',
        transition: 'box-shadow 0.2s cubic-bezier(.4,0,.2,1)'
      }}>
        <h1 style={{
          fontFamily: 'Merriweather, serif',
          fontSize: '2.7em',
          marginBottom: '0.5em',
          letterSpacing: 1,
          background: 'linear-gradient(90deg, #4be04b 30%, #1a6d3a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          <span role="img" aria-label="tree">🌳</span> TreeLover
        </h1>
        <p style={{
          color: '#3d5a4a',
          fontSize: '1.18em',
          marginBottom: '2.2em',
          lineHeight: 1.6
        }}>
          Discover, share, and discuss trees with a passionate community.<br />
          <span style={{ color: '#1a6d3a', fontWeight: 600 }}>
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
            <button
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #4be04b 60%, #1a6d3a 100%)',
                color: '#fff',
                fontSize: '1.1em',
                padding: '0.9em 0',
                borderRadius: 12,
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                marginBottom: 0,
                boxShadow: '0 2px 8px #b7d7c955',
                transition: 'background 0.2s, transform 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #1a6d3a 60%, #4be04b 100%)')}
              onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #4be04b 60%, #1a6d3a 100%)')}
            >
              🌳 Explore the Feed
            </button>
          </Link>
          <Link to="/upload" style={{ width: '100%' }}>
            <button
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #f7c873 60%, #e6b980 100%)',
                color: '#3d5a4a',
                fontSize: '1.1em',
                padding: '0.9em 0',
                borderRadius: 12,
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 8px #b7d7c955',
                transition: 'background 0.2s, transform 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #e6b980 60%, #f7c873 100%)')}
              onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #f7c873 60%, #e6b980 100%)')}
            >
              🌱 Share a Tree
            </button>
          </Link>
        </div>
        <div style={{
          marginTop: '2.2em',
          color: '#7c5e3c',
          fontSize: '0.98em',
          opacity: 0.7
        }}>
          <span>Made with <span role="img" aria-label="heart">💚</span> for nature lovers</span>
        </div>
      </div>
    </div>
  )
}

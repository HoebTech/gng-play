import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: '#1a1040',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}>
          <div style={{
            maxWidth: '400px',
            background: '#2d1b69',
            border: '2px solid #facc15',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#facc15', marginBottom: '12px' }}>Something went wrong</h2>
            <p style={{ marginBottom: '16px', opacity: 0.9 }}>
              The page hit an error and can't continue. Please refresh to try again.
            </p>
            <p style={{ fontSize: '0.8em', opacity: 0.7, marginBottom: '16px', wordBreak: 'break-word' }}>
              {String(this.state.error?.message || this.state.error)}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#facc15',
                color: '#1a1040',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1em',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

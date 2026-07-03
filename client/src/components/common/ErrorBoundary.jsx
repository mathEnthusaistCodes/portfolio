import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--color-text-muted)',
        }}>
          <h2 style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <button
            className="btn btn-primary"
            style={{ marginTop: '1rem' }}
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

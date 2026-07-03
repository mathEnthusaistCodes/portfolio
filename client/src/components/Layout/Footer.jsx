import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div className="container" style={innerStyle}>
        <p>&copy; {year} Kaushik Nagarajan. Built with React & Node.js</p>
        <div style={linkStyle}>
          <a
            href="https://www.linkedin.com/in/kaushiknagarajan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  borderTop: '1px solid var(--color-border)',
  padding: '1.5rem 0',
  marginTop: 'auto',
  fontSize: '0.85rem',
  color: 'var(--color-text-muted)',
};

const innerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const linkStyle = {
  display: 'flex',
  gap: '1rem',
};

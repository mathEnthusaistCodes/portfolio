import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/resume', label: 'Resume' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header style={headerStyle}>
      <div className="container" style={innerStyle}>
        <Link to="/" style={logoStyle}>
          KN
        </Link>
        <nav>
          <ul style={navListStyle}>
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  style={({ isActive }) => ({
                    ...navLinkStyle,
                    ...(isActive ? activeLinkStyle : {}),
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = {
  background: 'var(--color-secondary)',
  borderBottom: '1px solid var(--color-border)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const innerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'var(--color-highlight)',
  letterSpacing: '2px',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '0.25rem',
};

const navLinkStyle = {
  padding: '0.5rem 1rem',
  borderRadius: 'var(--radius)',
  color: 'var(--color-text-muted)',
  fontSize: '0.9rem',
  transition: 'all var(--transition)',
};

const activeLinkStyle = {
  color: 'var(--color-text)',
  background: 'var(--color-accent)',
};

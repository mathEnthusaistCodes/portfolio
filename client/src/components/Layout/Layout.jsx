import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
}

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

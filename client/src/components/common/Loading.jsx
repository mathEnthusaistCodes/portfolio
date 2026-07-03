import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
};

const spinnerStyle = {
  width: 40,
  height: 40,
  border: '3px solid var(--color-border)',
  borderTopColor: 'var(--color-highlight)',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
};

export default function Loading() {
  return (
    <>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <div style={containerStyle}>
        <div style={spinnerStyle} />
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import api from '../services/api';

export default function Contact() {
  useDocumentTitle('Contact');

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });
    try {
      await api.sendMessage(form);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to send message' });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--color-border)',
    background: 'var(--color-card)',
    color: 'var(--color-text)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color var(--transition)',
  };

  return (
    <div className="container section">
      <div style={{ maxWidth: '600px' }}>
        <h1 className="section-title">Get in Touch</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Have a question or want to work together? Send me a message.
        </p>

        {status && (
          <div style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius)',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            background:
              status.type === 'success' ? 'rgba(46, 204, 113, 0.15)' :
              status.type === 'error' ? 'rgba(231, 76, 60, 0.15)' :
              'rgba(52, 152, 219, 0.15)',
            color:
              status.type === 'success' ? 'var(--color-success)' :
              status.type === 'error' ? 'var(--color-error)' :
              'var(--color-text)',
          }}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="Your name"
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '0.4rem',
  fontSize: '0.85rem',
  color: 'var(--color-text-muted)',
};

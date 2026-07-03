import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, technologies, category, status, repoUrl, demoUrl } = project;

  const statusColors = {
    completed: 'var(--color-success)',
    'in-progress': 'var(--color-warning)',
    planned: 'var(--color-text-muted)',
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={headerStyle}>
        <span className="tag">{category}</span>
        <span
          style={{
            ...badgeStyle,
            background: statusColors[status] || 'var(--color-text-muted)',
          }}
        >
          {status}
        </span>
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
      <div style={techStyle}>
        {technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      <div style={actionStyle}>
        {repoUrl && repoUrl !== '#' && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Source
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem',
};

const badgeStyle = {
  padding: '0.2rem 0.6rem',
  borderRadius: '12px',
  fontSize: '0.75rem',
  color: '#fff',
};

const titleStyle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: 'var(--color-text)',
};

const descStyle = {
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)',
  lineHeight: 1.5,
  marginBottom: '1rem',
  flex: 1,
};

const techStyle = {
  marginBottom: '1rem',
};

const actionStyle = {
  display: 'flex',
  gap: '0.5rem',
};

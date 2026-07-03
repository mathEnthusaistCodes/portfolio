import React from 'react';
import { useApi } from '../hooks/useApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import api from '../services/api';
import Loading from '../components/common/Loading';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  useDocumentTitle('Projects');

  const { data: projects, loading, error } = useApi(() => api.getProjects());

  if (loading) return <Loading />;

  return (
    <div className="container section">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">Projects</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          A collection of projects I've worked on or currently building.
        </p>
      </div>

      {error && (
        <div style={{ color: 'var(--color-error)', padding: '1rem', background: 'var(--color-card)', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
          Failed to load projects: {error}
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects?.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          !error && (
            <p style={{ color: 'var(--color-text-muted)', gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              No projects yet. Check back soon!
            </p>
          )
        )}
      </div>
    </div>
  );
}

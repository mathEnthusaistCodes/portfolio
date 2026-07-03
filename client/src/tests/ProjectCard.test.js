import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const mockProject = {
  _id: '1',
  title: 'Test Project',
  description: 'A test project description',
  technologies: ['React', 'Node.js'],
  category: 'Web Development',
  status: 'completed',
  repoUrl: 'https://github.com/test',
  demoUrl: 'https://demo.test',
};

describe('ProjectCard', () => {
  test('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  test('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  test('renders technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  test('renders status badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('completed')).toBeInTheDocument();
  });

  test('renders category tag', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  test('renders action buttons', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Source')).toBeInTheDocument();
    expect(screen.getByText('Demo')).toBeInTheDocument();
  });

  test('does not render Source button if repoUrl is #', () => {
    const noRepo = { ...mockProject, repoUrl: '#' };
    render(<ProjectCard project={noRepo} />);
    expect(screen.queryByText('Source')).not.toBeInTheDocument();
  });
});

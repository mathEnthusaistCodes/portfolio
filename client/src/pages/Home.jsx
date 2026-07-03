import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import api from '../services/api';
import Loading from '../components/common/Loading';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  useDocumentTitle('Home');

  const { data: profile, loading: profileLoading } = useApi(() =>
    api.getProfile()
  );

  const { data: featuredProjects, loading: projectsLoading } = useApi(() =>
    api.getFeaturedProjects()
  );

  const { data: stats } = useApi(() => api.getProjectStats());

  if (profileLoading) return <Loading />;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary px-6 py-20 max-sm:py-12">
        <div className="mx-auto flex max-w-[1100px] items-center gap-12 max-lg:flex-col">
          {/* Left: Text */}
          <div className="flex-1">
            <p className="mb-1 text-lg text-highlight">Hi, I'm</p>
            <h1 className="mb-2 text-5xl font-bold leading-tight max-sm:text-4xl">
              {profile?.name || 'Kaushik Nagarajan'}
            </h1>
            <h2 className="mb-4 text-xl font-normal text-text-muted">
              {profile?.title || 'Engineering Manager'}
            </h2>
            <p className="max-w-[650px] leading-relaxed text-text-muted">
              {profile?.summary}
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/resume" className="btn btn-primary">
                View Resume
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: Profile Image + Stats */}
          <div className="flex shrink-0 flex-col items-center gap-6">
            <img
              src="/images/Profile.jpeg"
              alt={profile?.name || 'Profile'}
              className="h-56 w-56 rounded-full border-4 border-highlight/30 object-cover shadow-2xl max-sm:h-44 max-sm:w-44"
            />
            {stats && (
              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-bold text-highlight">
                    {new Date().getFullYear() - 2007}+
                  </span>
                  <span className="text-sm text-text-muted">Years Exp</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-bold text-highlight">
                    {stats?.totalProjects || 0}
                  </span>
                  <span className="text-sm text-text-muted">Projects Shown</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-bold text-highlight">20+</span>
                  <span className="text-sm text-text-muted">Team Size</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          {featuredProjects && featuredProjects.length > 0 && (
            <>
              <h2 className="section-title">Projects Showcased</h2>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/projects" className="btn btn-outline">
                  View All Projects
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

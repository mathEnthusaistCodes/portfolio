import React from 'react';
import { useApi } from '../hooks/useApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import api from '../services/api';
import { ResumeSkeleton } from '../components/common/Skeleton';

function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  const d = new Date(dateStr);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function Resume() {
  useDocumentTitle('Resume');

  const { data: profile, loading: profileLoading } = useApi(() => api.getProfile());
  const { data: skills, loading: skillsLoading } = useApi(() => api.getSkills());
  const { data: experience, loading: expLoading } = useApi(() => api.getExperience());
  const { data: education, loading: eduLoading } = useApi(() => api.getEducation());

  if (profileLoading || skillsLoading || expLoading || eduLoading) {
    return <ResumeSkeleton />;
  }

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-12">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between max-sm:flex-col max-sm:gap-4">
        <div>
          <h1 className="mb-1 text-4xl font-bold tracking-tight">{profile?.name}</h1>
          <p className="text-xl text-highlight">{profile?.title}</p>
        </div>
        <div className="text-right text-sm text-text-muted max-sm:text-left">
          {profile?.email && <p>{profile.email}</p>}
          {profile?.location && <p>{profile.location}</p>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="section-title">Summary</h2>
        <p className="max-w-[800px] leading-relaxed text-text-muted">
          {profile?.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="section-title">Experience</h2>
        <div className="flex flex-col gap-4">
          {experience?.map((exp, i) => (
            <div key={i} className="card">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="font-medium text-highlight">{exp.company}</p>
                </div>
                <span className="whitespace-nowrap text-sm text-text-muted">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-text-muted">
                {exp.description}
              </p>
              {exp.highlights?.length > 0 && (
                <ul className="flex flex-col gap-1.5 pl-5 text-sm text-text-muted">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="list-disc">{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Education */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section>
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills?.map((skill, i) => (
              <span key={i} className="tag">{skill.name}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Education</h2>
          <div className="flex flex-col gap-3">
            {education?.map((edu, i) => (
              <div key={i} className="card">
                <h4 className="text-base font-semibold">{edu.degree} in {edu.field}</h4>
                <p className="text-sm font-medium text-highlight">{edu.institution}</p>
                <p className="text-sm text-text-muted">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

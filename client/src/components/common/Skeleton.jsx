import React from 'react';

export function Skeleton({ className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`animate-pulse rounded bg-white/10 ${className}`}
      {...props}
    />
  );
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-3 rounded ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

export function ResumeSkeleton() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 py-12">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-5 w-40" />
        </div>
        <div className="space-y-1 text-right">
          <Skeleton className="ml-auto h-4 w-44" />
          <Skeleton className="ml-auto h-4 w-32" />
        </div>
      </div>

      {/* Summary */}
      <div className="mb-10">
        <Skeleton className="mb-4 h-7 w-28" />
        <SkeletonText lines={4} />
      </div>

      {/* Experience */}
      <div className="mb-10">
        <Skeleton className="mb-4 h-7 w-32" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-card p-6">
              <div className="mb-3 flex items-start justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-36" />
                </div>
                <Skeleton className="h-4 w-32" />
              </div>
              <SkeletonText lines={2} className="mb-3" />
              <div className="space-y-1.5">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-3 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Education grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Skeleton className="mb-4 h-7 w-24" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="mb-4 h-7 w-28" />
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-card p-4">
                <Skeleton className="mb-2 h-4 w-48" />
                <Skeleton className="mb-1 h-3 w-36" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

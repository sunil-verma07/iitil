// src/components/ui/StatusBadge.tsx
import React from 'react';
import type { ApplicationStatus } from '../../types';

const CONFIG: Record<ApplicationStatus, { label: string; classes: string }> = {
  pending:     { label: 'Pending',     classes: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  reviewing:   { label: 'Reviewing',   classes: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  shortlisted: { label: 'Shortlisted', classes: 'bg-[#00D9FF]/10 text-[#00D9FF] border-[#00D9FF]/20' },
  rejected:    { label: 'Rejected',    classes: 'bg-red-500/10 text-red-400 border-red-500/20' },
  hired:       { label: 'Hired',       classes: 'bg-green-500/10 text-green-400 border-green-500/20' },
};

export const StatusBadge: React.FC<{ status: ApplicationStatus }> = ({ status }) => {
  const { label, classes } = CONFIG[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs border font-medium tracking-wide ${classes}`}>
      {label}
    </span>
  );
};

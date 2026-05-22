// src/Pages/admin/AdminDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAllJobs } from '../../hooks/useJobs';
import { useApplications } from '../../hooks/useApplications';
import { StatusBadge } from '../../Components/ui/StatusBadge';
import { Spinner } from '../../Components/ui/Spinner';
import type { ApplicationStatus } from '../../types';
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const STATUS_ORDER: ApplicationStatus[] = ['pending', 'reviewing', 'shortlisted', 'hired', 'rejected'];

// ── Shared sx tokens ──────────────────────────────────────────────────────────
const cardSx = {
  backgroundColor: '#0E1228',
  border: '1px solid rgba(255,255,255,0.06)',
};

const labelSx = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '10px',
  letterSpacing: '3px',
  textTransform: 'uppercase' as const,
  color: '#00D9FF',
  mb: '8px',
};

// ── Stat Card ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  sub: string;
}

function StatCard({ icon, label, value, sub }: StatCardProps) {
  return (
    <Box sx={{ ...cardSx, p: '20px' }}>
      <Box sx={{ color: '#00D9FF', display: 'flex', alignItems: 'center', mb: '12px' }}>
        {icon}
      </Box>
      <Typography
        sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '30px', color: '#E8EAF2', lineHeight: 1 }}
      >
        {value}
      </Typography>
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8', mt: '4px' }}>
        {label}
      </Typography>
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', mt: '2px' }}>
        {sub}
      </Typography>
    </Box>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const { jobs, loading: jobsLoading } = useAllJobs();
  const { applications, loading: appsLoading } = useApplications();

  const published   = jobs.filter((j) => j.is_published).length;
  const pending     = applications.filter((a) => a.status === 'pending').length;
  const shortlisted = applications.filter((a) => a.status === 'shortlisted').length;

  const statusCounts = STATUS_ORDER.reduce<Record<ApplicationStatus, number>>(
    (acc, s) => { acc[s] = applications.filter((a) => a.status === s).length; return acc; },
    {} as Record<ApplicationStatus, number>
  );

  const recentApps = applications.slice(0, 6);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page heading */}
      <Box>
        <Typography sx={labelSx}>Overview</Typography>
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '24px', color: '#E8EAF2' }}>
          Dashboard
        </Typography>
      </Box>

      {/* ── Stat cards ──────────────────────────────────────────────────────── */}
      {jobsLoading || appsLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#8D94B8' }}>
          <CircularProgress size={18} sx={{ color: '#00D9FF' }} />
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>
            Loading stats...
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {[
            { icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 16 }} />, label: 'Total Jobs',    value: jobs.length,          sub: `${published} published` },
            { icon: <GroupsOutlinedIcon     sx={{ fontSize: 16 }} />, label: 'Applications',  value: applications.length,  sub: `${pending} pending review` },
            { icon: <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />, label: 'Shortlisted',   value: shortlisted,          sub: 'Ready for interviews' },
            { icon: <TrendingUpIcon         sx={{ fontSize: 16 }} />, label: 'Hired',          value: statusCounts.hired ?? 0, sub: 'This cycle' },
          ].map((card) => (
            <Grid item xs={6} lg={3} key={card.label}>
              <StatCard {...card} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* ── Application Pipeline ────────────────────────────────────────────── */}
      <Box sx={{ ...cardSx, p: '24px' }}>
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '13px', color: '#E8EAF2', mb: '16px' }}>
          Application Pipeline
        </Typography>
        <Grid container spacing={1.5}>
          {STATUS_ORDER.map((s) => (
            <Grid item xs={6} md={12 / STATUS_ORDER.length} key={s}>
              <Box
                sx={{
                  textAlign: 'center',
                  backgroundColor: '#141829',
                  border: '1px solid rgba(255,255,255,0.05)',
                  p: '12px',
                }}
              >
                <Typography
                  sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '24px', color: '#E8EAF2', mb: '6px' }}
                >
                  {statusCounts[s] ?? 0}
                </Typography>
                <StatusBadge status={s} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Recent Applications ─────────────────────────────────────────────── */}
      <Box sx={{ ...cardSx, p: '24px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '20px' }}>
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '13px', color: '#E8EAF2' }}>
            Recent Applications
          </Typography>
          <Box
            component={Link}
            to="/admin/applications"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#00D9FF',
              fontFamily: 'Jost, sans-serif',
              fontSize: '11px',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            View all <ArrowForwardIcon sx={{ fontSize: 12 }} />
          </Box>
        </Box>

        {appsLoading ? (
          <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <CircularProgress size={16} sx={{ color: '#00D9FF' }} />
            <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8' }}>Loading...</Typography>
          </Box>
        ) : recentApps.length === 0 ? (
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#7A82A8' }}>
            No applications yet.
          </Typography>
        ) : (
          <Box sx={{ overflowX: 'auto' }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
              <Box component="thead">
                <Box component="tr" sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {['Applicant', 'Role', 'Status', 'Date'].map((h, i) => (
                    <Box
                      component="th"
                      key={h}
                      sx={{
                        textAlign: 'left',
                        pb: '12px',
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 400,
                        fontSize: '11px',
                        color: '#7A82A8',
                        display: i === 1 ? { xs: 'none', md: 'table-cell' } : i === 3 ? { xs: 'none', lg: 'table-cell' } : 'table-cell',
                      }}
                    >
                      {h}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box component="tbody">
                {recentApps.map((app) => (
                  <Box
                    component="tr"
                    key={app.id}
                    sx={{ borderBottom: '1px solid rgba(255,255,255,0.04)', '&:last-child': { borderBottom: 'none' } }}
                  >
                    <Box component="td" sx={{ py: '12px' }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#E8EAF2' }}>
                        {app.full_name}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>
                        {app.email}
                      </Typography>
                    </Box>
                    <Box component="td" sx={{ py: '12px', display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8' }}>
                        {app.job?.title ?? '—'}
                      </Typography>
                    </Box>
                    <Box component="td" sx={{ py: '12px' }}>
                      <StatusBadge status={app.status} />
                    </Box>
                    <Box component="td" sx={{ py: '12px', display: { xs: 'none', lg: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>
                        {new Date(app.created_at).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
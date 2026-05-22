// src/Pages/admin/AdminApplications.tsx
import React, { useState } from 'react';
import { useApplications } from '../../hooks/useApplications';
import { applicationsService } from '../../services/applications';
import { StatusBadge } from '../../Components/ui/StatusBadge';
import { Toast, useToast } from '../../Components/ui/Toast';
import type { Application, ApplicationStatus } from '../../types';
import {
  Box,
  Typography,
  InputBase,
  Select,
  MenuItem,
  CircularProgress,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const STATUSES: (ApplicationStatus | '')[] = ['', 'pending', 'reviewing', 'shortlisted', 'rejected', 'hired'];
const STATUS_LABELS: Record<ApplicationStatus | '', string> = {
  '': 'All Statuses', pending: 'Pending', reviewing: 'Reviewing',
  shortlisted: 'Shortlisted', rejected: 'Rejected', hired: 'Hired',
};

// ── Shared tokens ─────────────────────────────────────────────────────────────
const cardSx = { backgroundColor: '#0E1228', border: '1px solid rgba(255,255,255,0.06)' };
const labelSx = { fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#00D9FF', mb: '4px' };
const selectSx = {
  backgroundColor: '#141829',
  border: '1px solid rgba(255,255,255,0.07)',
  color: '#8D94B8',
  fontFamily: 'Jost, sans-serif',
  fontSize: '11px',
  height: '40px',
  borderRadius: 0,
  minWidth: '140px',
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiSelect-select': { py: 0, px: '12px', display: 'flex', alignItems: 'center' },
  '& .MuiSvgIcon-root': { color: '#8D94B8' },
  '&:hover': { borderColor: 'rgba(0,217,255,0.3)' },
  '&.Mui-focused': { borderColor: 'rgba(0,217,255,0.4)' },
};
const menuPaperSx = {
  backgroundColor: '#141829',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 0,
  '& .MuiMenuItem-root': {
    fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8',
    '&:hover': { backgroundColor: '#1D2442', color: '#E8EAF2' },
    '&.Mui-selected': { backgroundColor: '#1D2442', color: '#00D9FF' },
  },
};

// ── Detail row ────────────────────────────────────────────────────────────────
function Row({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', mb: '2px' }}>{label}</Typography>
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2' }}>{value}</Typography>
    </Box>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AdminApplications() {
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | ''>('');
  const [search, setSearch]             = useState('');
  const [detailApp, setDetailApp]       = useState<Application | null>(null);
  const [updatingId, setUpdatingId]     = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const { toast, show: showToast, hide: hideToast } = useToast();

  const { applications, loading, error, refetch } = useApplications({
    status: statusFilter || undefined,
    search: search || undefined,
  });

  const handleStatusChange = async (app: Application, status: ApplicationStatus) => {
    try {
      setUpdatingId(app.id);
      await applicationsService.updateStatus(app.id, status);
      showToast('Status updated.', 'success');
      if (detailApp?.id === app.id) setDetailApp({ ...detailApp, status });
      refetch();
    } catch {
      showToast('Failed to update status.', 'error');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDownloadResume = async (app: Application) => {
    if (!app.resume_url) return;
    try {
      const url = await applicationsService.getResumeUrl(app.resume_url);
      window.open(url, '_blank');
    } catch {
      showToast('Could not download resume.', 'error');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Heading */}
      <Box>
        <Typography sx={labelSx}>Manage</Typography>
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '24px', color: '#E8EAF2' }}>
          Applications
        </Typography>
      </Box>

      {/* ── Filters ─────────────────────────────────────────────────────────── */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '12px' }}>
        {/* Search */}
        <Box
          sx={{
            flex: 1,
            maxWidth: '360px',
            backgroundColor: '#141829',
            border: `1px solid ${searchFocused ? 'rgba(0,217,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
            display: 'flex',
            alignItems: 'center',
            px: '14px',
            height: '40px',
            transition: 'border-color 0.2s',
          }}
        >
          <SearchIcon sx={{ fontSize: 14, color: '#8D94B8', mr: '8px', flexShrink: 0 }} />
          <InputBase
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search by name or email..."
            sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', flex: 1, '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }}
          />
        </Box>

        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | '')}
          sx={selectSx}
          MenuProps={{ PaperProps: { sx: menuPaperSx } }}
        >
          {STATUSES.map((s) => (
            <MenuItem key={s} value={s}>{STATUS_LABELS[s]}</MenuItem>
          ))}
        </Select>
      </Box>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CircularProgress size={18} sx={{ color: '#00D9FF' }} />
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>Loading applications...</Typography>
        </Box>
      ) : error ? (
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#f87171' }}>{error}</Typography>
      ) : applications.length === 0 ? (
        <Box sx={{ ...cardSx, textAlign: 'center', py: '64px' }}>
          <DescriptionOutlinedIcon sx={{ fontSize: 28, color: 'rgba(141,148,184,0.4)', mb: '12px' }} />
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#7A82A8' }}>No applications found.</Typography>
        </Box>
      ) : (
        <Box sx={{ ...cardSx, overflow: 'hidden' }}>
          {/* Count */}
          <Box sx={{ px: '20px', py: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#7A82A8' }}>
              {applications.length} applications
            </Typography>
          </Box>

          <Box sx={{ overflowX: 'auto' }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
              <Box component="thead">
                <Box component="tr" sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {[
                    { label: 'Applicant', hide: false },
                    { label: 'Role',      hide: 'md' },
                    { label: 'Status',    hide: false },
                    { label: 'Applied',   hide: 'lg' },
                    { label: 'Actions',   hide: false, right: true },
                  ].map(({ label, hide, right }) => (
                    <Box
                      component="th"
                      key={label}
                      sx={{
                        textAlign: right ? 'right' : 'left',
                        px: '20px',
                        py: '12px',
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 400,
                        fontSize: '11px',
                        color: '#7A82A8',
                        display: hide === 'md' ? { xs: 'none', md: 'table-cell' } : hide === 'lg' ? { xs: 'none', lg: 'table-cell' } : 'table-cell',
                      }}
                    >
                      {label}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box component="tbody">
                {applications.map((app) => (
                  <Box
                    component="tr"
                    key={app.id}
                    sx={{
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      transition: 'background-color 0.15s',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.02)' },
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    {/* Applicant */}
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '11px', color: '#E8EAF2' }}>{app.full_name}</Typography>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>{app.email}</Typography>
                    </Box>

                    {/* Role */}
                    <Box component="td" sx={{ px: '20px', py: '12px', display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8' }}>{app.job?.title ?? '—'}</Typography>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>{app.job?.department}</Typography>
                    </Box>

                    {/* Status select */}
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Select
                          value={app.status}
                          onChange={(e) => handleStatusChange(app, e.target.value as ApplicationStatus)}
                          disabled={updatingId === app.id}
                          sx={{ ...selectSx, minWidth: '110px', fontSize: '10px', height: '30px' }}
                          MenuProps={{ PaperProps: { sx: menuPaperSx } }}
                        >
                          {(['pending', 'reviewing', 'shortlisted', 'rejected', 'hired'] as ApplicationStatus[]).map((s) => (
                            <MenuItem key={s} value={s} sx={{ textTransform: 'capitalize' }}>{s}</MenuItem>
                          ))}
                        </Select>
                        <StatusBadge status={app.status} />
                        {updatingId === app.id && <CircularProgress size={12} sx={{ color: '#00D9FF' }} />}
                      </Box>
                    </Box>

                    {/* Date */}
                    <Box component="td" sx={{ px: '20px', py: '12px', display: { xs: 'none', lg: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>
                        {new Date(app.created_at).toLocaleDateString()}
                      </Typography>
                    </Box>

                    {/* Actions */}
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                        <IconButton size="small" onClick={() => setDetailApp(app)} title="View details"
                          sx={{ color: '#8D94B8', '&:hover': { color: '#00D9FF' }, p: '4px' }}>
                          <OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                        {app.resume_url && (
                          <IconButton size="small" onClick={() => handleDownloadResume(app)} title="Download resume"
                            sx={{ color: '#8D94B8', '&:hover': { color: '#00D9FF' }, p: '4px' }}>
                            <FileDownloadOutlinedIcon sx={{ fontSize: 15 }} />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* ── Detail Drawer ────────────────────────────────────────────────────── */}
      {detailApp && (
        <Box sx={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', justifyContent: 'flex-end' }}>
          {/* Backdrop */}
          <Box
            sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setDetailApp(null)}
          />

          {/* Panel */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: '420px',
              height: '100%',
              overflowY: 'auto',
              backgroundColor: '#0A0E27',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Drawer header */}
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(10,14,39,0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                px: '24px',
                py: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '13px', color: '#E8EAF2' }}>
                Application Detail
              </Typography>
              <IconButton onClick={() => setDetailApp(null)} size="small"
                sx={{ color: '#7A82A8', '&:hover': { color: '#E8EAF2' } }}>
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            {/* Drawer body */}
            <Box sx={{ px: '24px', py: '20px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
              <Row label="Name"  value={detailApp.full_name} />
              <Row label="Email" value={detailApp.email} />
              {detailApp.phone && <Row label="Phone" value={detailApp.phone} />}
              {detailApp.experience_years != null && (
                <Row label="Experience" value={`${detailApp.experience_years} years`} />
              )}
              {detailApp.portfolio_url && (
                <Box>
                  <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', mb: '4px' }}>Portfolio</Typography>
                  <Box
                    component="a"
                    href={detailApp.portfolio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#00D9FF', fontFamily: 'Jost, sans-serif', fontSize: '12px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {detailApp.portfolio_url} <OpenInNewOutlinedIcon sx={{ fontSize: 12 }} />
                  </Box>
                </Box>
              )}
              <Row label="Applied For" value={detailApp.job?.title ?? '—'} />
              <Row label="Applied On"  value={new Date(detailApp.created_at).toLocaleString()} />

              {/* Status */}
              <Box>
                <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', mb: '8px' }}>Status</Typography>
                <Select
                  value={detailApp.status}
                  onChange={(e) => handleStatusChange(detailApp, e.target.value as ApplicationStatus)}
                  sx={{ ...selectSx, minWidth: '160px' }}
                  MenuProps={{ PaperProps: { sx: menuPaperSx } }}
                >
                  {(['pending', 'reviewing', 'shortlisted', 'rejected', 'hired'] as ApplicationStatus[]).map((s) => (
                    <MenuItem key={s} value={s} sx={{ textTransform: 'capitalize' }}>{s}</MenuItem>
                  ))}
                </Select>
              </Box>

              {/* Cover letter */}
              {detailApp.cover_letter && (
                <Box>
                  <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', mb: '8px' }}>Cover Letter</Typography>
                  <Box sx={{ backgroundColor: '#141829', p: '16px' }}>
                    <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', color: '#8D94B8', lineHeight: '22px', whiteSpace: 'pre-line' }}>
                      {detailApp.cover_letter}
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Resume download */}
              {detailApp.resume_url && (
                <Box
                  component="button"
                  onClick={() => handleDownloadResume(detailApp)}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#1D2442',
                    color: '#00D9FF',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '12px',
                    px: '16px',
                    py: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    '&:hover': { backgroundColor: 'rgba(29,36,66,0.7)' },
                    alignSelf: 'flex-start',
                  }}
                >
                  <FileDownloadOutlinedIcon sx={{ fontSize: 14 }} /> Download Resume
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}

      {toast && <Toast key={toast.id} message={toast.message} type={toast.type} onClose={hideToast} />}
    </Box>
  );
}
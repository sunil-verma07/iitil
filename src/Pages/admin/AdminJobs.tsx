// src/Pages/admin/AdminJobs.tsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAllJobs } from '../../hooks/useJobs';
import { jobsService } from '../../services/jobs';
import { Toast, useToast } from '../../Components/ui/Toast';
import type { Job, JobInsert, EmploymentType } from '../../types';
import {
  Box,
  Typography,
  InputBase,
  Select,
  MenuItem,
  Grid,
  CircularProgress,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EMP_TYPES: EmploymentType[] = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];

interface JobFormValues {
  title: string;
  department: string;
  location: string;
  employment_type: EmploymentType;
  experience: string;
  description: string;
  responsibilities: string;
  requirements: string;
  skills: string;
  salary_range: string;
  is_published: boolean;
}

// ── Shared tokens ─────────────────────────────────────────────────────────────
const cardSx = { backgroundColor: '#0E1228', border: '1px solid rgba(255,255,255,0.06)' };

const labelSx = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '10px',
  letterSpacing: '3px',
  textTransform: 'uppercase' as const,
  color: '#00D9FF',
  mb: '4px',
};

const selectSx = {
  backgroundColor: '#141829',
  border: '1px solid rgba(255,255,255,0.07)',
  color: '#8D94B8',
  fontFamily: 'Jost, sans-serif',
  fontSize: '11px',
  height: '40px',
  borderRadius: 0,
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
    fontFamily: 'Jost, sans-serif', fontSize: '12px', color: '#8D94B8',
    '&:hover': { backgroundColor: '#1D2442', color: '#E8EAF2' },
    '&.Mui-selected': { backgroundColor: '#1D2442', color: '#00D9FF' },
  },
};

// ── Form field wrapper ────────────────────────────────────────────────────────
function FField({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <Box>
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8', letterSpacing: '0.05em', mb: '8px' }}>
        {label}
        {required && <Box component="span" sx={{ color: '#00D9FF', ml: '4px' }}>*</Box>}
      </Typography>
      {children}
      {error && <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#f87171', mt: '4px' }}>{error}</Typography>}
    </Box>
  );
}

// ── Input / Textarea sx helper ─────────────────────────────────────────────────
const fieldInputSx = (hasError: boolean) => ({
  width: '100%',
  backgroundColor: '#1F2850',
  border: `1px solid ${hasError ? 'rgba(248,113,113,0.5)' : 'transparent'}`,
  color: '#E8EAF2',
  fontFamily: 'Jost, sans-serif',
  fontSize: '13px',
  fontWeight: 300,
  px: '16px',
  py: '12px',
  outline: 'none',
  transition: 'border-color 0.2s',
  '& input, & textarea': {
    fontFamily: 'Jost, sans-serif',
    fontSize: '13px',
    color: '#E8EAF2',
    '&::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 },
  },
  '&:focus-within': { borderColor: 'rgba(0,217,255,0.4)' },
});

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AdminJobs() {
  const { jobs, loading, error, refetch } = useAllJobs();
  const { toast, show: showToast, hide: hideToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<JobFormValues>();

  const openCreate = () => {
    setEditingJob(null);
    reset({ title: '', department: '', location: '', employment_type: 'Full-time', experience: '', description: '', responsibilities: '', requirements: '', skills: '', salary_range: '', is_published: false });
    setModalOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditingJob(job);
    reset({
      title: job.title, department: job.department, location: job.location,
      employment_type: job.employment_type, experience: job.experience,
      description: job.description, responsibilities: job.responsibilities ?? '',
      requirements: job.requirements ?? '', skills: job.skills.join(', '),
      salary_range: job.salary_range ?? '', is_published: job.is_published,
    });
    setModalOpen(true);
  };

  const onSubmit = async (values: JobFormValues) => {
    try {
      setSaving(true);
      const payload: JobInsert = { ...values, skills: values.skills.split(',').map((s) => s.trim()).filter(Boolean) };
      if (editingJob) {
        await jobsService.update(editingJob.id, payload);
        showToast('Job updated successfully.', 'success');
      } else {
        await jobsService.create(payload);
        showToast('Job created successfully.', 'success');
      }
      setModalOpen(false);
      refetch();
    } catch (e: unknown) {
      showToast(e instanceof Error ? e.message : 'Failed to save job.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this job? All associated applications will also be deleted.')) return;
    try {
      setDeletingId(id);
      await jobsService.delete(id);
      showToast('Job deleted.', 'success');
      refetch();
    } catch {
      showToast('Failed to delete job.', 'error');
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggle = async (job: Job) => {
    try {
      await jobsService.togglePublish(job.id, !job.is_published);
      showToast(`Job ${job.is_published ? 'unpublished' : 'published'}.`, 'success');
      refetch();
    } catch {
      showToast('Failed to update job.', 'error');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Heading row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={labelSx}>Manage</Typography>
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '24px', color: '#E8EAF2' }}>Jobs</Typography>
        </Box>
        <Box
          component="button"
          onClick={openCreate}
          sx={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#19C8E8', color: '#000',
            fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '13px',
            px: '16px', height: '40px', border: 'none', cursor: 'pointer',
            transition: 'background-color 0.2s',
            '&:hover': { backgroundColor: '#00D9FF' },
          }}
        >
          <AddIcon sx={{ fontSize: 16 }} /> New Job
        </Box>
      </Box>

      {/* ── Table ─────────────────────────────────────────────────────────── */}
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CircularProgress size={18} sx={{ color: '#00D9FF' }} />
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>Loading jobs...</Typography>
        </Box>
      ) : error ? (
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#f87171' }}>{error}</Typography>
      ) : jobs.length === 0 ? (
        <Box sx={{ ...cardSx, textAlign: 'center', py: '64px' }}>
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#7A82A8' }}>No jobs yet. Create your first one.</Typography>
        </Box>
      ) : (
        <Box sx={{ ...cardSx, overflow: 'hidden' }}>
          <Box sx={{ overflowX: 'auto' }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
              <Box component="thead">
                <Box component="tr" sx={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {[
                    { label: 'Title',      hide: false },
                    { label: 'Department', hide: 'md' },
                    { label: 'Type',       hide: 'lg' },
                    { label: 'Status',     hide: false },
                    { label: 'Actions',    hide: false, right: true },
                  ].map(({ label, hide, right }) => (
                    <Box component="th" key={label} sx={{
                      textAlign: right ? 'right' : 'left',
                      px: '20px', py: '12px',
                      fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', color: '#7A82A8',
                      display: hide === 'md' ? { xs: 'none', md: 'table-cell' } : hide === 'lg' ? { xs: 'none', lg: 'table-cell' } : 'table-cell',
                    }}>
                      {label}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box component="tbody">
                {jobs.map((job) => (
                  <Box component="tr" key={job.id} sx={{
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'background-color 0.15s',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.02)' },
                    '&:last-child': { borderBottom: 'none' },
                  }}>
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '11px', color: '#E8EAF2' }}>{job.title}</Typography>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8' }}>{job.location}</Typography>
                    </Box>
                    <Box component="td" sx={{ px: '20px', py: '12px', display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8' }}>{job.department}</Typography>
                    </Box>
                    <Box component="td" sx={{ px: '20px', py: '12px', display: { xs: 'none', lg: 'table-cell' } }}>
                      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#8D94B8' }}>{job.employment_type}</Typography>
                    </Box>
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Box sx={{
                        display: 'inline-flex',
                        px: '8px', py: '2px',
                        border: `1px solid ${job.is_published ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.1)'}`,
                        backgroundColor: job.is_published ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.03)',
                      }}>
                        <Typography sx={{
                          fontFamily: 'Jost, sans-serif', fontSize: '11px',
                          color: job.is_published ? '#4ade80' : '#7A82A8',
                        }}>
                          {job.is_published ? 'Published' : 'Draft'}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="td" sx={{ px: '20px', py: '12px' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                        <IconButton size="small" onClick={() => handleToggle(job)}
                          title={job.is_published ? 'Unpublish' : 'Publish'}
                          sx={{ color: '#8D94B8', '&:hover': { color: '#00D9FF' }, p: '4px' }}>
                          {job.is_published
                            ? <VisibilityOffOutlinedIcon sx={{ fontSize: 15 }} />
                            : <VisibilityOutlinedIcon   sx={{ fontSize: 15 }} />
                          }
                        </IconButton>
                        <IconButton size="small" onClick={() => openEdit(job)}
                          sx={{ color: '#8D94B8', '&:hover': { color: '#E8EAF2' }, p: '4px' }}>
                          <EditOutlinedIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDelete(job.id)}
                          disabled={deletingId === job.id}
                          sx={{ color: '#8D94B8', '&:hover': { color: '#f87171' }, p: '4px', '&.Mui-disabled': { opacity: 0.5 } }}>
                          {deletingId === job.id
                            ? <CircularProgress size={14} sx={{ color: '#f87171' }} />
                            : <DeleteOutlineIcon sx={{ fontSize: 15 }} />
                          }
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* ── Job Form Modal ────────────────────────────────────────────────── */}
      {modalOpen && (
        <Box sx={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', p: '16px' }}>
          {/* Backdrop */}
          <Box
            sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setModalOpen(false)}
          />

          {/* Modal panel */}
          <Box sx={{
            position: 'relative', zIndex: 10,
            width: '100%', maxWidth: '680px',
            maxHeight: '92vh', overflowY: 'auto',
            backgroundColor: '#0E1228',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {/* Modal header */}
            <Box sx={{
              position: 'sticky', top: 0,
              backgroundColor: 'rgba(14,18,40,0.95)', backdropFilter: 'blur(8px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              px: '32px', py: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '15px', color: '#E8EAF2' }}>
                {editingJob ? 'Edit Job' : 'New Job'}
              </Typography>
              <IconButton onClick={() => setModalOpen(false)} size="small"
                sx={{ color: '#7A82A8', '&:hover': { color: '#E8EAF2' } }}>
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            {/* Form */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ px: '32px', py: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Grid container spacing={2}>
                {/* Title */}
                <Grid item xs={12} md={6}>
                  <FField label="Job Title" required error={errors.title?.message}>
                    <Box sx={fieldInputSx(!!errors.title)}>
                      <InputBase placeholder="Senior Engineer" inputProps={{ ...register('title', { required: 'Required' }) }}
                        sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                    </Box>
                  </FField>
                </Grid>

                {/* Department */}
                <Grid item xs={12} md={6}>
                  <FField label="Department" required error={errors.department?.message}>
                    <Box sx={fieldInputSx(!!errors.department)}>
                      <InputBase placeholder="Engineering" inputProps={{ ...register('department', { required: 'Required' }) }}
                        sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                    </Box>
                  </FField>
                </Grid>

                {/* Location */}
                <Grid item xs={12} md={6}>
                  <FField label="Location" required>
                    <Box sx={fieldInputSx(false)}>
                      <InputBase placeholder="Hyderabad / Remote" inputProps={{ ...register('location', { required: 'Required' }) }}
                        sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                    </Box>
                  </FField>
                </Grid>

                {/* Employment type */}
                <Grid item xs={12} md={6}>
                  <FField label="Employment Type" required>
                    <Select {...register('employment_type')} defaultValue="Full-time"
                      sx={{ ...selectSx, width: '100%', height: '46px' }}
                      MenuProps={{ PaperProps: { sx: menuPaperSx } }}>
                      {EMP_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </Select>
                  </FField>
                </Grid>

                {/* Experience */}
                <Grid item xs={12} md={6}>
                  <FField label="Experience Required" required>
                    <Box sx={fieldInputSx(false)}>
                      <InputBase placeholder="3–5 years" inputProps={{ ...register('experience', { required: 'Required' }) }}
                        sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                    </Box>
                  </FField>
                </Grid>

                {/* Salary range */}
                <Grid item xs={12} md={6}>
                  <FField label="Salary Range">
                    <Box sx={fieldInputSx(false)}>
                      <InputBase placeholder="₹12–18 LPA" inputProps={{ ...register('salary_range') }}
                        sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                    </Box>
                  </FField>
                </Grid>
              </Grid>

              {/* Description */}
              <FField label="Description" required error={errors.description?.message}>
                <Box sx={fieldInputSx(!!errors.description)}>
                  <InputBase multiline rows={4} placeholder="Role overview..."
                    inputProps={{ ...register('description', { required: 'Required' }) }}
                    sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', alignItems: 'flex-start', '& textarea::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                </Box>
              </FField>

              {/* Responsibilities */}
              <FField label="Responsibilities">
                <Box sx={fieldInputSx(false)}>
                  <InputBase multiline rows={4} placeholder="• Design pipelines&#10;• Collaborate with teams..."
                    inputProps={{ ...register('responsibilities') }}
                    sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', alignItems: 'flex-start', '& textarea::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                </Box>
              </FField>

              {/* Requirements */}
              <FField label="Requirements">
                <Box sx={fieldInputSx(false)}>
                  <InputBase multiline rows={4} placeholder="• Strong SQL skills&#10;• 3+ years Python..."
                    inputProps={{ ...register('requirements') }}
                    sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', alignItems: 'flex-start', '& textarea::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                </Box>
              </FField>

              {/* Skills */}
              <FField label="Skills (comma-separated)">
                <Box sx={fieldInputSx(false)}>
                  <InputBase placeholder="Python, SQL, Spark, AWS" inputProps={{ ...register('skills') }}
                    sx={{ width: '100%', fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2', '& input::placeholder': { color: 'rgba(141,148,184,0.6)', opacity: 1 } }} />
                </Box>
              </FField>

              {/* Publish toggle */}
              <Controller
                name="is_published"
                control={control}
                render={({ field }) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => field.onChange(!field.value)}>
                    <Box sx={{
                      width: '40px', height: '20px',
                      borderRadius: '10px',
                      backgroundColor: field.value ? '#00D9FF' : '#1D2442',
                      position: 'relative',
                      transition: 'background-color 0.2s',
                      flexShrink: 0,
                    }}>
                      <Box sx={{
                        position: 'absolute', top: '2px', left: '2px',
                        width: '16px', height: '16px',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        transform: field.value ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'transform 0.2s',
                      }} />
                    </Box>
                    <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>
                      Publish immediately
                    </Typography>
                  </Box>
                )}
              />

              {/* Submit */}
              <Box
                component="button"
                type="submit"
                disabled={saving}
                sx={{
                  width: '100%', height: '48px',
                  backgroundColor: '#19C8E8', color: '#000',
                  fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '14px',
                  border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
                  opacity: saving ? 0.6 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'background-color 0.2s',
                  '&:hover:not(:disabled)': { backgroundColor: '#00D9FF' },
                }}
              >
                {saving ? (
                  <><CircularProgress size={14} sx={{ color: '#000' }} /> Saving...</>
                ) : (
                  <>{editingJob ? 'Update Job' : 'Create Job'} <ArrowForwardIcon sx={{ fontSize: 16 }} /></>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {toast && <Toast key={toast.id} message={toast.message} type={toast.type} onClose={hideToast} />}
    </Box>
  );
}
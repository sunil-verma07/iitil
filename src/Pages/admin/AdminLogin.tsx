// src/Pages/admin/AdminLogin.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import {
  Box,
  Typography,
  InputBase,
  CircularProgress,
  IconButton,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface LoginForm {
  email: string;
  password: string;
}

// ── Shared field input sx ────────────────────────────────────────────────────
const inputWrapSx = (focused: boolean, error: boolean) => ({
  width: '100%',
  backgroundColor: '#141829',
  border: `1px solid ${error ? 'rgba(248,113,113,0.5)' : focused ? 'rgba(0,217,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
  px: '16px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  transition: 'border-color 0.2s',
});

export default function AdminLogin() {
  const { signIn, session } = useAuth();
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  React.useEffect(() => {
    if (session) navigate('/admin/dashboard', { replace: true });
  }, [session, navigate]);

  const onSubmit = async ({ email, password }: LoginForm) => {
    try {
      setLoading(true);
      setAuthError('');
      await signIn(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch {
      setAuthError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0A0E27',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: '24px',
        fontFamily: 'Jost, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: '320px',
          height: '320px',
          backgroundColor: 'rgba(0,217,255,0.05)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
        {/* Header */}
        <Box sx={{ mb: '40px', textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#00D9FF',
              mb: '8px',
            }}
          >
            IITIL
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              color: '#E8EAF2',
            }}
          >
            HR Admin Login
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '13px',
              color: '#7A82A8',
              mt: '8px',
            }}
          >
            Restricted access — authorized personnel only
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* Email */}
          <Box>
            <Typography sx={labelSx}>Email Address</Typography>
            <Box sx={inputWrapSx(focusedField === 'email', !!errors.email)}>
              <InputBase
                type="email"
                placeholder="hr@iitil.com"
                inputProps={{ ...register('email', { required: 'Email required' }) }}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                sx={inputBaseSx}
              />
            </Box>
            {errors.email && <Typography sx={errorSx}>{errors.email.message}</Typography>}
          </Box>

          {/* Password */}
          <Box>
            <Typography sx={labelSx}>Password</Typography>
            <Box sx={{ ...inputWrapSx(focusedField === 'password', !!errors.password), pr: '4px' }}>
              <InputBase
                type={showPw ? 'text' : 'password'}
                placeholder="••••••••"
                inputProps={{ ...register('password', { required: 'Password required' }) }}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                sx={{ ...inputBaseSx, flex: 1 }}
              />
              <IconButton
                onClick={() => setShowPw(!showPw)}
                size="small"
                sx={{ color: '#8D94B8', '&:hover': { color: '#E8EAF2' } }}
              >
                {showPw
                  ? <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} />
                  : <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />
                }
              </IconButton>
            </Box>
            {errors.password && <Typography sx={errorSx}>{errors.password.message}</Typography>}
          </Box>

          {/* Auth error */}
          {authError && (
            <Box
              sx={{
                backgroundColor: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.2)',
                px: '12px',
                py: '8px',
              }}
            >
              <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', color: '#f87171' }}>
                {authError}
              </Typography>
            </Box>
          )}

          {/* Submit */}
          <Box
            component="button"
            type="submit"
            disabled={loading}
            sx={{
              mt: '8px',
              width: '100%',
              height: '48px',
              backgroundColor: '#19C8E8',
              color: '#000',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.05em',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s',
              '&:hover:not(:disabled)': { backgroundColor: '#00D9FF' },
            }}
          >
            {loading ? (
              <>
                <CircularProgress size={14} sx={{ color: '#000' }} />
                Signing in...
              </>
            ) : (
              <>Sign In <ArrowForwardIcon sx={{ fontSize: 16 }} /></>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ── Shared style tokens ───────────────────────────────────────────────────────
const labelSx = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '11px',
  color: '#8D94B8',
  letterSpacing: '0.05em',
  mb: '8px',
  display: 'block',
};

const errorSx = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '11px',
  color: '#f87171',
  mt: '4px',
};

const inputBaseSx = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '13px',
  color: '#E8EAF2',
  width: '100%',
  '& input::placeholder': { color: 'rgba(141,148,184,0.5)', opacity: 1 },
};
// src/Pages/admin/AuthCallback.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Box, Typography, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const handle = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));
        const accessToken  = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const errorParam   = hashParams.get('error');
        const errorDesc    = hashParams.get('error_description');

        if (errorParam) {
          setError(errorDesc ?? 'The invite link is invalid or has expired. Ask an admin to resend the invite.');
          return;
        }

        if (accessToken && refreshToken) {
          const { error: setErr } = await supabase.auth.setSession({
            access_token:  accessToken,
            refresh_token: refreshToken,
          });
          if (setErr) { setError(setErr.message); return; }
        }
      }

      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        setError('Could not establish session. Please ask an admin to resend your invite.');
        return;
      }

      const { data: adminRow } = await supabase
        .from('admin_users')
        .select('id')
        .eq('id', sessionData.session.user.id)
        .single();

      if (!adminRow) {
        setError('Your account has not been granted admin access yet. Contact your administrator.');
        await supabase.auth.signOut();
        return;
      }

      navigate('/admin/dashboard', { replace: true });
    };

    handle();
  }, [navigate]);

  if (error) {
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
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '360px',
            backgroundColor: '#141829',
            border: '1px solid rgba(239,68,68,0.2)',
            p: '32px',
            textAlign: 'center',
          }}
        >
          {/* Error icon */}
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239,68,68,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: '16px',
            }}
          >
            <Typography sx={{ color: '#f87171', fontSize: '18px', lineHeight: 1 }}>!</Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#f87171',
              mb: '12px',
            }}
          >
            Access Error
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '13px',
              color: '#8D94B8',
              lineHeight: '22px',
              mb: '24px',
            }}
          >
            {error}
          </Typography>

          <Box
            component="a"
            href="/admin/login"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#19C8E8',
              color: '#000',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              px: '24px',
              py: '10px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              '&:hover': { backgroundColor: '#00D9FF' },
            }}
          >
            Back to Login <ArrowForwardIcon sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0A0E27',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontFamily: 'Jost, sans-serif',
      }}
    >
      <CircularProgress size={22} sx={{ color: '#00D9FF' }} />
      <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>
        Verifying your account...
      </Typography>
    </Box>
  );
}
// src/layouts/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box, Typography, CircularProgress } from '@mui/material';

export const ProtectedRoute: React.FC = () => {
  const { session, adminUser, loading } = useAuth();


  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#0A0E27',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <CircularProgress size={22} sx={{ color: '#00D9FF' }} />
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#8D94B8' }}>
          Verifying access...
        </Typography>
      </Box>
    );
  }

  if (!session || !adminUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};
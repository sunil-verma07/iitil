// src/layouts/AdminLayout.tsx
import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const SIDEBAR_W = 240;

const NAV = [
  { to: '/admin/dashboard',    icon: <DashboardOutlinedIcon  sx={{ fontSize: 16 }} />, label: 'Dashboard'    },
  { to: '/admin/jobs',         icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 16 }} />, label: 'Jobs'         },
  { to: '/admin/applications', icon: <GroupsOutlinedIcon     sx={{ fontSize: 16 }} />, label: 'Applications' },
];

export default function AdminLayout() {
  const { adminUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  // ── Sidebar content (shared between desktop + mobile drawer) ──────────────
  const SidebarContent = () => (
    <Box
      sx={{
        width: `${SIDEBAR_W}px`,
        height: '100%',
        backgroundColor: '#0A0E27',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo */}
      <Box sx={{ px: '24px', py: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Typography
          sx={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '10px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#00D9FF',
            mb: '4px',
          }}
        >
          IITIL
        </Typography>
        <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#7A82A8' }}>
          HR Admin Panel
        </Typography>
      </Box>

      {/* Nav */}
      <Box component="nav" sx={{ flex: 1, px: '12px', py: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {NAV.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            style={{ textDecoration: 'none' }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  px: isActive ? '10px' : '12px',
                  py: '10px',
                  borderLeft: isActive ? '2px solid #00D9FF' : '2px solid transparent',
                  backgroundColor: isActive ? 'rgba(0,217,255,0.08)' : 'transparent',
                  color: isActive ? '#00D9FF' : '#8D94B8',
                  transition: 'all 0.15s',
                  cursor: 'pointer',
                  '&:hover': {
                    color: isActive ? '#00D9FF' : '#E8EAF2',
                    backgroundColor: isActive ? 'rgba(0,217,255,0.08)' : 'rgba(255,255,255,0.03)',
                  },
                }}
              >
                {icon}
                <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: 'inherit' }}>
                  {label}
                </Typography>
              </Box>
            )}
          </NavLink>
        ))}
      </Box>

      {/* User + Sign out */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', px: '16px', py: '16px' }}>
        {/* Avatar + name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '12px' }}>
          <Box
            sx={{
              width: '28px',
              height: '28px',
              backgroundColor: '#1D2442',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#00D9FF' }}>
              {adminUser?.full_name?.[0] ?? adminUser?.email?.[0]?.toUpperCase()}
            </Typography>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: '#E8EAF2', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
              {adminUser?.full_name ?? 'Admin'}
            </Typography>
            <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', color: '#7A82A8', textTransform: 'capitalize' }}>
              {adminUser?.role}
            </Typography>
          </Box>
        </Box>

        {/* Sign out */}
        <Box
          component="button"
          onClick={handleSignOut}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#7A82A8',
            fontFamily: 'Jost, sans-serif',
            fontSize: '11px',
            p: 0,
            transition: 'color 0.15s',
            '&:hover': { color: '#f87171' },
          }}
        >
          <LogoutOutlinedIcon sx={{ fontSize: 14 }} />
          Sign out
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#080C1F',
        color: '#E8EAF2',
        fontFamily: 'Jost, sans-serif',
        display: 'flex',
      }}
    >
      {/* ── Desktop sidebar (always visible ≥ lg) ──────────────────────────── */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${SIDEBAR_W}px`,
          zIndex: 40,
        }}
      >
        <SidebarContent />
      </Box>

      {/* ── Mobile drawer overlay ───────────────────────────────────────────── */}
      {open && (
        <>
          {/* Backdrop */}
          <Box
            sx={{ position: 'fixed', inset: 0, zIndex: 30, backgroundColor: 'rgba(0,0,0,0.5)', display: { lg: 'none' } }}
            onClick={() => setOpen(false)}
          />
          {/* Drawer panel */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 40,
              display: { lg: 'none' },
            }}
          >
            <SidebarContent />
          </Box>
        </>
      )}

      {/* ── Main content area ───────────────────────────────────────────────── */}
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, lg: `${SIDEBAR_W}px` },
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Mobile top bar */}
        <Box
          component="header"
          sx={{
            display: { xs: 'flex', lg: 'none' },
            alignItems: 'center',
            gap: '16px',
            px: '20px',
            py: '14px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: '#0A0E27',
          }}
        >
          <IconButton onClick={() => setOpen(true)} size="small" sx={{ color: '#8D94B8', p: 0 }}>
            <MenuIcon sx={{ fontSize: 22 }} />
          </IconButton>
          <Typography sx={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', color: '#E8EAF2' }}>
            IITIL HR Admin
          </Typography>
        </Box>

        {/* Page content */}
        <Box
          component="main"
          sx={{ flex: 1, p: { xs: '24px', lg: '32px' } }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
'use client';

import { Box, Container } from '@mui/material';

import { Header } from '../Elements/Header';
import { Sidebar } from '../Elements/Sidebar';

type Props = {
  children: React.ReactNode;
};

export function BaseLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box
        component='main'
        sx={{
          width: '100%',
          height: '100dvh',
          overflow: 'auto',
          pt: '4rem',
        }}
      >
        <Box height='100%' width='100%' padding='2rem'>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

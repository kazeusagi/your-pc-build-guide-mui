import { useEffect } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Drawer as MuiDrawer, Toolbar, IconButton, Divider, styled } from '@mui/material';
import { BsGpuCard } from 'react-icons/bs';
import { FaMemory } from 'react-icons/fa6';
import { FiCpu } from 'react-icons/fi';

import { isOpenSidebarAtom, sidebarListItemsAtom, toggleSidebarAtom } from '@/util/atom';

import { ButtonList } from './ButtonList';

type Props = {};

export function Sidebar({}: Props) {
  const isOpenSidebar = useAtomValue(isOpenSidebarAtom);
  const toggleSidebar = useSetAtom(toggleSidebarAtom);

  const setSidebarListItems = useSetAtom(sidebarListItemsAtom);

  // pageLoad
  useEffect(() => {
    setSidebarListItems([
      { icon: <DashboardIcon />, text: 'Home', href: '/' },
      { icon: <FiCpu />, text: 'CPU', href: '/parts/cpu' },
      { icon: <BsGpuCard />, text: 'GPU', href: '/parts/gpu' },
      { icon: <FaMemory />, text: 'Memory', href: '/parts/memory' },
    ]);
  });

  return (
    <Drawer variant='permanent' open={isOpenSidebar}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <ButtonList />
    </Drawer>
  );
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      overflowX: 'hidden',
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(10),
        },
      }),
    },
  }),
);

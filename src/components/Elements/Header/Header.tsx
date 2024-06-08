import { useAtomValue, useSetAtom } from 'jotai';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  AppBarProps as MuiAppBarProps,
  styled,
} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

import { isOpenSidebarAtom, toggleSidebarAtom } from '@/util/atom';

import { LoadingBar } from '../LoadingBar/LoadingBar';

export type Props = {};

export function Header({}: Props) {
  const isOpenSidebar = useAtomValue(isOpenSidebarAtom);
  const toggleSidebar = useSetAtom(toggleSidebarAtom);

  return (
    <AppBar
      position='absolute'
      open={isOpenSidebar}
      sx={{
        background: 'rgba(15, 18, 20, 0.8)',
        backdropFilter: 'blur(8px)',
        boxShadow: 'inset 0px -10px 10px #1d2126',
      }}
    >
      <Toolbar sx={{}}>
        <IconButton
          onClick={toggleSidebar}
          sx={{
            overflow: 'hidden',
            width: '36px',
            opacity: 100,
            marginRight: '36px',
            transition: 'all 0.2s ease-in-out',
            ...(isOpenSidebar && { width: 0, marginRight: 0, opacity: 0, padding: 0 }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Dashboard</Typography>
      </Toolbar>
      <LoadingBar />
    </AppBar>
  );
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  height: '4rem',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: 'calc(100% - 240px)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

export type Props = { children: React.ReactNode };

export function MuiThemeProvider({ children }: Props) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: ['Roboto', 'Noto Sans JP', 'sans-serif'].join(','),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      {children}
    </ThemeProvider>
  );
}

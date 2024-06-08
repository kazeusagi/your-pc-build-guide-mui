import { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';

import { Button } from '@mui/material';

import { selectedPageAtom } from '@/util/atom';

export type ButtonWithIconProps = {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick?: () => void;
};
export function ButtonWithIcon({ icon, text, onClick = () => {} }: ButtonWithIconProps) {
  const selectedPage = useAtomValue(selectedPageAtom);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(selectedPage?.text === text);
  }, [selectedPage]);

  return (
    <Button
      variant={isActive ? 'contained' : 'outlined'}
      startIcon={icon}
      size='large'
      sx={{
        minWidth: 0,
        width: '100%',
        px: '16px',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '6px',
        overflow: 'hidden',
      }}
      onClick={() => {
        if (!isActive) onClick();
      }}
    >
      {text}
    </Button>
  );
}

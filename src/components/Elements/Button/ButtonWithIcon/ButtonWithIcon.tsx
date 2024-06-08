import { Button } from '@mui/material';

export type ButtonWithIconProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
};
export function ButtonWithIcon({ icon, text, onClick }: ButtonWithIconProps) {
  return (
    <Button
      variant='outlined'
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
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

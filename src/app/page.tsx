'use client';

import { useState } from 'react';

import { Box, Button, Drawer, Typography } from '@mui/material';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<string[]>([
    'グラボ',
    'CPU',
    'メモリ',
    'ストレージ',
    '電源',
    'ケース',
    'マザーボード',
    '冷却',
    'その他',
  ]);
  return (
    <main>
      <Button onClick={toggleDrawer()}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer()}>
        {list.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </Drawer>
      <Box>
        <Typography>こんにちわ</Typography>
        <Typography>世界</Typography>
        <Typography>ハローワールド！！</Typography>
        <Typography>Hello World!! </Typography>
      </Box>
    </main>
  );

  function toggleDrawer() {
    return () => setOpen(!open);
  }
}

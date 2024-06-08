'use client';

import { useEffect } from 'react';

import { useAtom } from 'jotai';

import {
  Box,
  Card,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Icon,
  IconButton,
  Typography,
} from '@mui/material';
import { SiAmd, SiIntel } from 'react-icons/si';

import { tagsAtom } from '@/util/atom';

export default function Home() {
  const [tags, setTags] = useAtom(tagsAtom);
  const tagList = [
    {
      labelTitle: 'Intel',
      labelIcon: <SiIntel size={30} />,
      description: '高品質かつ安定した動作を求める場合はこちら',
      value: 'intel',
    },
    {
      labelTitle: 'AMD',
      labelIcon: <SiAmd size={40} />,
      description: '比較的安価に高性能なＰＣを組みたい方はこちら',
      value: 'amd',
    },
  ];

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <Box display='flex' justifyContent='center' gap={2}>
      {tagList.map((tag) => (
        <FormControl key={tag.value}>
          <Card variant='outlined'>
            <FormGroup>
              <FormControlLabel
                sx={{ p: 2 }}
                control={<Checkbox onChange={onChange} value={tag.value} />}
                label={
                  <Box>
                    <Box display='flex' gap={1}>
                      <Typography variant='h6'>{tag.labelTitle}</Typography>
                      <Chip label={tag.labelIcon} />
                    </Box>
                    <Typography variant='h6'>{tag.description}</Typography>
                  </Box>
                }
              ></FormControlLabel>
            </FormGroup>
          </Card>
        </FormControl>
      ))}
    </Box>
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const isExist = tags.includes(e.target.value);

    if (isExist) {
      setTags((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTags((prev) => [...prev, e.target.value]);
    }
  }
}

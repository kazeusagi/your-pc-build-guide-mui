import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useAtom } from 'jotai';

import { Box, LinearProgress, Typography } from '@mui/material';

import { isLoadingAtom } from '@/util/atom';

export function LoadingBar() {
  const pathName = usePathname(); // 画面遷移の検知用
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState<'primary' | 'success'>('primary');
  const [variant, setVariant] = useState<'determinate' | undefined>(undefined);

  const [showLoadingBar, setShowLoadingBar] = useState(true);

  // 画面が変わったらローディングを完了
  useEffect(() => {
    const clear = finishLoading();
    return clear;
  }, [pathName]);

  // ローディング開始
  useEffect(() => {
    if (isLoading) {
      startLoading();
    }
  }, [isLoading]);

  return (
    <Box width='100%' position='relative' top={0} left={0}>
      <Typography>{showLoadingBar}</Typography>
      {showLoadingBar && <LinearProgress variant={variant} value={progress} color={color} />}
    </Box>
  );

  // ローディング開始
  function startLoading() {
    setShowLoadingBar(true);
    setProgress(30);
    setColor('primary');
    setVariant(undefined);
  }

  // ローディング完了
  // タイムアウトのクリア関数を返す
  function finishLoading(): () => void {
    setIsLoading(false);
    setProgress(100);
    setColor('success');
    setVariant('determinate');

    // 時間差でローディングバーを非表示にする
    const timeout = setTimeout(function () {
      setShowLoadingBar(false);
    }, 800);

    return () => clearTimeout(timeout);
  }
}

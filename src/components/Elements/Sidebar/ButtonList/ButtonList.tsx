'use client';

import { useRouter } from 'next/navigation';

import { useAtomValue, useSetAtom } from 'jotai';

import { List } from '@mui/material';

import { isLoadingAtom, sidebarListItemsAtom } from '@/util/atom';

import { ButtonListItem } from './ButtonListItem';

export type Props = {};

export function ButtonList({}: Props) {
  const siderbarListItems = useAtomValue(sidebarListItemsAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  const router = useRouter();

  return (
    <List component='nav'>
      {siderbarListItems.map((item, index) => (
        <ButtonListItem key={index} item={item} onClick={() => onClick(item.href)} />
      ))}
    </List>
  );

  function onClick(href: string) {
    setIsLoading(true);
    router.push(href);
  }
}

'use client';

import { useRouter } from 'next/navigation';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { List } from '@mui/material';

import { Page } from '@/types/Sidebar';
import { isLoadingAtom, selectedPageAtom, sidebarListItemsAtom } from '@/util/atom';

import { ButtonListItem } from './ButtonListItem';

export type Props = {};

export function ButtonList({}: Props) {
  const siderbarListItems = useAtomValue(sidebarListItemsAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);

  const router = useRouter();

  return (
    <List component='nav'>
      {siderbarListItems.map((item, index) => (
        <ButtonListItem
          key={index}
          item={item}
          isActive={isActive(item)}
          onClick={() => onClick(item)}
        />
      ))}
    </List>
  );

  function onClick(item: Page) {
    setIsLoading(true);
    setSelectedPage(item);
    router.push(item.href);
  }

  function isActive(item: Page) {
    return selectedPage === item;
  }
}

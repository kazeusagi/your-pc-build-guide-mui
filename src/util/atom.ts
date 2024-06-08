import { atom } from 'jotai';

import { SidebarListItemType } from '@/types/Sidebar';

// サイドバー関連
export const sidebarListItemsAtom = atom<SidebarListItemType[]>([]);
export const isOpenSidebarAtom = atom(false);
// サイドバーの表示を切り替えるsetter
export const toggleSidebarAtom = atom(null, (get, set) => {
  set(isOpenSidebarAtom, (prev) => !prev);
});

// ローディング関連
export const isLoadingAtom = atom(true);

// export const selectedPageAtom = atom<string>();

export const tagsAtom = atom<string[]>([]);

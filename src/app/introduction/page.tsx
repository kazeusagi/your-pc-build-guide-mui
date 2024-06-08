import { useSetAtom } from 'jotai';

import { tagsAtom } from '@/util/atom';

export default function Introduction() {
  const setTags = useSetAtom(tagsAtom);
  return <div>はじめに</div>;
}

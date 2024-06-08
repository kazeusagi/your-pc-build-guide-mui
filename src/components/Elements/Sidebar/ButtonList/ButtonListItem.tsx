import { ListItem } from '@mui/material';

import { SidebarListItemType } from '@/types/Sidebar';

import { SidebarButton } from '../SidebarButton';

type Props = {
  item: SidebarListItemType;
  onClick: () => void;
};

export function ButtonListItem({ item, onClick }: Props) {
  return (
    <ListItem>
      <SidebarButton {...item} onClick={onClick} />
    </ListItem>
  );
}

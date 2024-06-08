import { ListItem } from '@mui/material';

import { ButtonWithIcon } from '@/components/Elements/Button';
import { Page } from '@/types/Sidebar';

type Props = {
  item: Page;
  isActive: boolean;
  onClick: () => void;
};

export function ButtonListItem({ item, isActive, onClick }: Props) {
  return (
    <ListItem>
      <ButtonWithIcon {...item} isActive={isActive} onClick={onClick} />
    </ListItem>
  );
}

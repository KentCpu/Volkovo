import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSingOut } from '../model/use-sing-out';

export const SignOutButton = () => {
  const signOut = useSingOut();

  return (
    <IconButton onClick={signOut}>
      <ExitToAppIcon color="action" />
    </IconButton>
  );
};

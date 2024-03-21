import { Stack, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUser } from '../model/use-user';

export const UserAccount = () => {
  const userContext = useUser();

  return (
    <Stack direction="row" spacing={1}>
      <AccountCircleIcon />
      <Typography variant="body1">{userContext?.user?.login}</Typography>
    </Stack>
  );
};

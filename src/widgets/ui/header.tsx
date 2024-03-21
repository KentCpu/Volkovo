import { AppBar, Box, Toolbar } from '@mui/material';
import { SignOutButton } from '../../features/auth';
import { UserAccount } from '../../entities/user';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <UserAccount />
          </Box>
          <SignOutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

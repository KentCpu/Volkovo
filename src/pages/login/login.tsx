import { LoginForm } from '../../features/auth';
import { Box } from '@mui/material';

export const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <LoginForm />
    </Box>
  );
};

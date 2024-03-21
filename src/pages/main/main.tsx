import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PathPage } from '../../shared/constants/path-page';

export const Main = () => {
  const navigate = useNavigate();
  const redirectToLoginPage = () => navigate(PathPage.LOGIN);

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      spacing={2}
    >
      <Typography variant="h6">
        Для того чтобы воспользоваться приложением, необходимо войти в аккаунт
      </Typography>
      <Button variant="outlined" onClick={redirectToLoginPage}>
        Войти
      </Button>
    </Stack>
  );
};

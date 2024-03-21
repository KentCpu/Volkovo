import { Stack, Button, Typography } from '@mui/material';

export const Forbidden = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h5">
        Страница не существует или у вас нет прав просматривать данный контент
      </Typography>
    </Stack>
  );
};

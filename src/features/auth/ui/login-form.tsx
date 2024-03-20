import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useLogin } from '../model/use-login';

export interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { control, reset, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isLoading, handleLogin } = useLogin();

  return (
    <Box
      sx={{
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <Typography variant="h4" component="h1" align="center" mb={2}>
        Вход
      </Typography>
      <form
        onSubmit={handleSubmit((data) => {
          handleLogin(data);
        })}
      >
        <Stack spacing={3}>
          <Controller
            control={control}
            name="email"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <TextField
                placeholder="Электронная почта"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <TextField
                placeholder="Пароль"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button disabled={isLoading} type="submit" variant="contained">
            Войти
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

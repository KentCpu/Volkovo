import { api } from '../../../shared/api/api';
import { LoginFormData } from '../ui/login-form';

export const login = async (data: LoginFormData) => api.post('/login', data);

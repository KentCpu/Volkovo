import { Role } from '../../../shared/constants/roles';

export interface User {
  login: string;
  role: Role;
}

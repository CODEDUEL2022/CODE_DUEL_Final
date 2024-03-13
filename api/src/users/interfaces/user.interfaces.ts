import { UUID } from 'crypto';

export interface User {
  id: UUID;
  name: string;
}

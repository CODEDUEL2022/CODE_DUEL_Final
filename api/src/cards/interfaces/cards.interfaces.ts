export interface GetCardInterface {
  id: number;
  os_id: number;
  name: string;
  value: number;
  type: 'ATTACK' | 'HEAL' | 'ABSORPTION';
  path: string;
}

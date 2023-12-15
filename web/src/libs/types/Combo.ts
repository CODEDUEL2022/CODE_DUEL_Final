export interface ComboType {
  id: number;
  name: string;
  combo: Array<number>;
  names: Array<string>;
  value: number;
  action_type: string;
  enforce_os_id: number;
  cost: number;
}

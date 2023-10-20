import { ComboType } from 'libs/types/Combo';

export const sampleCombos: Array<ComboType> = [
  {
    id: 1,
    name: 'hoge',
    combo: [1, 2, 3],
    names: ['vue', 'react', 'angular'],
    value: 60,
    action_type: 'attack',
    enforce_os_id: 3,
    cost: 4,
  },
  {
    id: 2,
    name: 'huga',
    combo: [1, 3],
    names: ['vue', 'react'],
    value: 60,
    action_type: 'attack',
    enforce_os_id: 3,
    cost: 4,
  },
  {
    id: 3,
    name: 'piyo',
    combo: [1, 4],
    names: ['vue', 'react'],
    value: 60,
    action_type: 'attack',
    enforce_os_id: 3,
    cost: 4,
  },
  {
    id: 4,
    name: 'humu',
    combo: [1, 4, 8],
    names: ['vue', 'react', 'angular'],
    value: 60,
    action_type: 'attack',
    enforce_os_id: 3,
    cost: 4,
  },
];

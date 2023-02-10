import { UniqueIdentifier } from '@dnd-kit/core';

export interface CardType {
  id: UniqueIdentifier;
  name: String;
  cost: number;
  enforce_os_id: number;
  img_src: String;
}

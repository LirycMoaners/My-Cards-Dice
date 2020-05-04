import { FirestoreElement } from '../firestore-element.model';
import { Die } from './die.model';
import { Card } from './card.model';

export class Set extends FirestoreElement {
  public name: string;
  public elements: Die[] | Card[];
}

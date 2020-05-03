import { FirestoreElement } from '../firestore-element.model';
import { SetWithParameter } from './set-with-parameter.model';
import { CardGameParameter } from './card-game-parameter.model';

export class GameCategory extends FirestoreElement {
  public name: string;
  public sets: SetWithParameter[];
  public cardGameParameter?: CardGameParameter;
}

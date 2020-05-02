import { GameCategory } from './game-category.model';
import { FirestoreElement } from './firestore-element.model';

export class Game extends FirestoreElement {
  public gameCategory: GameCategory;
  public date: Date;
  public isFirstPlayerRandom: boolean;
  public isGameEnd: boolean;
  public userIds: string[];
  public adminIds: string[];
}

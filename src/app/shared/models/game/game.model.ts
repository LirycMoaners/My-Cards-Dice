import { GameCategory } from '../game-category/game-category.model';
import { FirestoreElement } from '../firestore-element.model';
import { GamePlayer } from './game-player.model';
import { GameSet } from './game-set.model';

export class Game extends FirestoreElement {
  public gameCategory: GameCategory;
  public date: Date;
  public isFirstPlayerRandom: boolean;
  public isGameEnd: boolean;
  public gamePlayers: GamePlayer[];
  public gameSet?: GameSet[];
  public board?: string[][][];
  public userIds: string[];
  public adminIds: string[];
}

import { Interaction } from './interaction.model';

export class CardGameParameter {
  public isExistPlayerHand: boolean;
  public isPlayerCanSeeHisHand: boolean;
  public isPlayerCanSeeOtherHands: boolean;
  public isExistGameBoard: boolean;
  public isGameBoardStackable: boolean;
  public gameBoardX: number;
  public gameBoardY: number;
  public isExistPlayerBoard: boolean;
  public isVisiblePlayerBoard: boolean;
  public isPlayerBoardStackable: boolean;
  public playerBoardX: number;
  public playerBoardY: number;
  public interactions: Interaction[];
}

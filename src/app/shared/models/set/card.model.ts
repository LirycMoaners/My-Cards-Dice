export class Card {
  public id: string;
  public type: 'image' | 'text';
  public text?: string;
  public image?: string;
  public imagePosX?: number;
  public imagePosY?: number;
  public imageWidth?: number;
  public imageHeight?: number;
}

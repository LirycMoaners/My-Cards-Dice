import { Set } from './set.model';

export class CardSet extends Set {
  public isBordered: boolean;
  public backsideType: 'color' | 'image';
  public backsideColor?: string;
  public backsideTextColor?: string;
  public backsideImage?: string;
  public backsideImagePosX?: number;
  public backsideImagePosY?: number;
  public backsideImageWidth?: number;
  public backsideImageHeight?: number;
}

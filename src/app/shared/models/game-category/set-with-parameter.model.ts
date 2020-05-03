import { Set } from '../set/set.model';
import { Interaction } from './interaction.model';

export class SetWithParameter {
  public set: Set;
  public isExistGameDiscard: boolean;
  public isVisibleGameDiscard: boolean;
  public isExistPlayerDiscard: boolean;
  public isVisiblePlayerDiscard: boolean;
  public interactions: Interaction[];
}

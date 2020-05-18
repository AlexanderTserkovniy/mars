import {Corporation} from '@app/corporation/corporation.typings';

export type MarsResources = {
  megaCredits: number;
  steel: number;
  titanium: number;
  plants: number;
  energy: number;
  heat: number;

  // other resources

  microbes?: number;
  animals?: number;
};

const DEFAULT_RATING: 20 = 20;
const DEFAULT_RESOURCES: MarsResources = {
  megaCredits: 0,
  steel: 0,
  titanium: 0,
  plants: 0,
  energy: 0,
  heat: 0,
};

export interface IMarsPlayer {
  playerName: string;
  corporation: (null | { [key: string]: any });
  terraformingRating: number;
  resources: MarsResources;
}

export type MarsPlayerOptions = Omit<IMarsPlayer, 'corporation' | 'terraformingRating' | 'resources'>;

export class Player implements IMarsPlayer {
  public playerName: string;
  public corporation: (null | Corporation) = null;
  public terraformingRating: number = DEFAULT_RATING;
  public resources: MarsResources = DEFAULT_RESOURCES;

  constructor(marsPlayerOptions: MarsPlayerOptions) {
    Object.assign(this, marsPlayerOptions);
  }
}

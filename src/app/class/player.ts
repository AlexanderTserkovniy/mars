import {Corporation} from '@app/corporation/corporation.typings';

export type MarsResources = {
  megacredit: number;
  steel: number;
  titanium: number;
  plant: number;
  energy: number;
  heat: number;

  // other resources

  microbes?: number;
  animals?: number;
};

export type MarsResourcesProduction = Exclude<MarsResources, 'microbes' | 'animals'>;

const DEFAULT_RATING: 20 = 20;
const DEFAULT_RESOURCES: MarsResources = {
  megacredit: 0,
  steel: 0,
  titanium: 0,
  plant: 0,
  energy: 0,
  heat: 0,
};
const DEFAULT_RESOURCES_PRODUCTION = {
  megacredit: 0,
  steel: 0,
  titanium: 0,
  plant: 0,
  energy: 0,
  heat: 0,
};

export interface IMarsPlayer {
  playerName: string;
  corporation: (null | { [key: string]: any });
  terraformingRating: number;
  resources: MarsResources;
  production: MarsResourcesProduction;
}

export type MarsPlayerOptions = Omit<IMarsPlayer, 'corporation' | 'terraformingRating' | 'resources' | 'production'>;

export class Player implements IMarsPlayer {
  public playerName: string;
  public corporation: (null | Corporation) = null;
  public terraformingRating: number = DEFAULT_RATING;
  public resources: MarsResources = Object.assign({}, DEFAULT_RESOURCES);
  public production: MarsResourcesProduction = Object.assign({}, DEFAULT_RESOURCES_PRODUCTION);

  constructor(marsPlayerOptions: MarsPlayerOptions) {
    Object.assign(this, marsPlayerOptions);
  }
}

export interface IPlayer {
  $key?: string;
  name: string;
}

export class Player implements IPlayer {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}
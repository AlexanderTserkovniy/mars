import { Injectable } from '@angular/core';
import { Player } from './classes/player';
import cardsHashMap from '../assets/base_cards_hashmap.json';
import cardsArray from '../assets/base_cards_array.json';
import corporationsHashMap from '../assets/corporations_hashmap.json';

@Injectable({
  providedIn: 'root'
})
export class GameStartService {
  public players: Player[];

  constructor() {
    this.players = [
      new Player({
        playerName: 'Александр (Человек)',
      }),
      new Player({
        playerName: 'Бот №1 (Бот)',
      })
    ];
  }

  public start() {
    console.log('cardsHashMap', cardsHashMap);
    console.log('cardsArray', cardsArray);

    const choice1 = Math.floor(Math.random() * Object.keys(corporationsHashMap).length);
    const choice2 = Math.floor(Math.random() * Object.keys(corporationsHashMap).length);

    this.players[0].corporation = {
      name: Object.keys(corporationsHashMap)[choice1],
      value: corporationsHashMap[Object.keys(corporationsHashMap)[choice1]]
    };

    this.players[1].corporation = {
      name: Object.keys(corporationsHashMap)[choice2],
      value: corporationsHashMap[Object.keys(corporationsHashMap)[choice2]]
    };

    console.log(this.players[0].corporation, this.players[1].corporation);
  }
}

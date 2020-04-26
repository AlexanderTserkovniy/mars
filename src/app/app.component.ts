import { Component } from '@angular/core';
import { GameStartService } from './game-start.service';
import { Player } from './classes/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ GameStartService ]
})
export class AppComponent {
  title = 'mars';
  players: Player[];

  constructor(private gameStartService: GameStartService) {
    this.players = this.gameStartService.players;
    console.log('gameStartService', gameStartService);
  }

  ngOnInit() {
    console.log(this.gameStartService);
  }

  startTheGame() {
    this.gameStartService.start();
  }
}

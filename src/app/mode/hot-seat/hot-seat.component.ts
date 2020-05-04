import { Component, OnInit } from '@angular/core';
import {GameService} from '../../game/game.service';

@Component({
  selector: 'app-hot-seat',
  templateUrl: './hot-seat.component.html',
  styleUrls: ['./hot-seat.component.css']
})
export class HotSeatComponent implements OnInit {

  public numberOfPlayers = this.gameService.numberOfPlayers;
  public possibleNumberOfPlayers = this.gameService.possibleNumberOfPlayers;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
  }

  onPlayerNumberChoose() {
    this.gameService.numberOfPlayers = this.numberOfPlayers;
  }

}

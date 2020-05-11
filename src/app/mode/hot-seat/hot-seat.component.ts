import {Component, OnInit} from '@angular/core';
import {GameService} from '@app/game/game.service';
import {NumberToArrayPipe} from '@app/pipe/number-to-array.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hot-seat',
  templateUrl: './hot-seat.component.html',
  styleUrls: ['./hot-seat.component.css']
})
export class HotSeatComponent implements OnInit {

  public step = 0;
  public numberOfPlayers: number = this.gameService.numberOfPlayers;
  public possibleNumberOfPlayers: number[] = this.gameService.possibleNumberOfPlayers;
  public players: string[] = [];

  constructor(public gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onPlayerNumberChoose() {
    this.gameService.numberOfPlayers = this.numberOfPlayers;
  }

  onPlayersNumberChoiceFinish(): void {
    this.step = 1;
    this.players = new NumberToArrayPipe().transform(this.numberOfPlayers).map((_, index) => `Player #${index + 1}`);
  }

  onPlayersNamesEditFinish(): void {
    this.gameService.createPlayers(this.players);
    this.router.navigate(['hs/game']);
  }
}

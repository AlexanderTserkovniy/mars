import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '@app/game/game.service';
import {Subscription} from 'rxjs';
import {Player} from '@app/class/player';
import {environment} from '@env/environment';

@Component({
  selector: 'app-hot-seat-start',
  templateUrl: './hot-seat-start.component.html',
  styleUrls: ['./hot-seat-start.component.css']
})
export class HotSeatStartComponent implements OnDestroy, OnInit {

  public players: Player[];

  private getPlayersSubscription: Subscription;

  constructor(public gameService: GameService) {
    if (!environment.production) {
      // TODO Fix when players are already created;
      this.gameService.createPlayers(['Direct player 1', 'Direct player 2']);
    }
  }

  ngOnInit(): void {
    this.getPlayersSubscription = this.gameService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  ngOnDestroy() {
    this.getPlayersSubscription.unsubscribe();
  }

}
